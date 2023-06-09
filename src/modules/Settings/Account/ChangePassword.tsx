import { Status } from "@/src/utils/constants";
import { Box, Button, ButtonGroup, Divider, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import BoxHeader from "../../../components/common/BoxHeader";
import InputField from "../../../components/common/InputField";
import { useCustomToast } from "../../../hooks/useCustomToast";
import { usePasswordValidation } from "../../../hooks/usePasswordValidation";
import mp from "../../../services/mixpanel";
import { useAuth } from "../../Auth/AuthContext";
import PasswordHints from "../../Auth/PasswordHints";

const ChangePassword = () => {
  const auth = useAuth();
  const [status, setStatus] = useState<Status>(Status.idle);
  const [password, setPassword] = useState({
    new: "",
    confirm: ""
  });
  const [validLength, hasNumber, upperCase, lowerCase, match] =
    usePasswordValidation(password.new, password.confirm);
  const [showHints, setShowHints] = useState(false);
  const [showConfirmHint, setShowConfirmHint] = useState(false);
  const { createToast } = useCustomToast();

  const handleForm = (e) => {
    e.preventDefault();
    const [key, value] = [e.target.name, e.target.value];
    setPassword({ ...password, [key]: value });
  };

  /**
   * Handles the password update request from Firebase
   * @returns Promise | Toast
   */
  const handleSubmit = async () => {
    setStatus(Status.loading);
    try {
      return await auth.user
        .updatePassword(password.new)
        .then(() => {
          mp.track("Настройки учетной записи", {
            action: "password update",
            status: "success"
          });
          setStatus(Status.success);
          setPassword({ new: "", confirm: "" });
          return createToast(
            "Пароль успешно обновлен",
            "success",
            "Теперь вы можете войти в систему, используя свой новый пароль"
          );
        })
        .catch((err) => {
          mp.track("Настройки учетной записи", {
            action: "password update",
            status: "error",
            source: "Firebase"
          });
          setStatus(Status.error);
          return createToast(
            "Не удалось обновить пароль",
            "error",
            err.message
          );
        });
    } catch {
      setStatus(Status.error);
      return createToast(
        "Не удалось обновить пароль",
        "error",
        "При выполнении этого запроса произошла ошибка"
      );
    }
  };

  //Условие для сохранения кнопки обновления пароля отключенной
  const isDisabled =
    Object.values(password).some((v) => !v.length) ||
    !(validLength && hasNumber && upperCase && lowerCase && match);

  return (
    <Box mb="8">
      <BoxHeader
        title="Поменять пароль"
        size={{ title: "lg", subtitle: "sm" }}
        mb="2.5"
      />
      <InputField
        label="Пароль"
        name="new"
        value={password.new}
        type="password"
        onChange={handleForm}
        onFocus={() => setShowHints(true)}
        onBlur={() => setShowHints(false)}
        placeholder="8+ символов"
      />
      {showHints ? (
        <PasswordHints
          validators={{ validLength, hasNumber, upperCase, lowerCase }}
        />
      ) : null}
      <InputField
        label="Подтвердите пароль"
        name="confirm"
        value={password.confirm}
        type="password"
        onChange={handleForm}
        onFocus={() => setShowConfirmHint(true)}
        onBlur={() => setShowConfirmHint(false)}
      />
      {showConfirmHint && !match ? (
        <PasswordHints
          hints={[{ message: "Пароли не совпадают", validator: match }]}
        />
      ) : null}
      <ButtonGroup spacing="4">
        <Button
          colorScheme="blue"
          my="2"
          size="sm"
          onClick={handleSubmit}
          isDisabled={isDisabled}
          isLoading={status === Status.loading}
          loadingText="Обновление пароля"
        >
          Обновить пароль
        </Button>
        <Link href="/LoginHelp">
          <Button
            colorScheme="blue"
            fontWeight="normal"
            variant="link"
            my="2"
            size="sm"
          >
            Забыли пароль?
          </Button>
        </Link>
      </ButtonGroup>
      <Divider />
    </Box>
  );
};

export default ChangePassword;
