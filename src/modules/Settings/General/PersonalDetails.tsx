import { Status } from "@/src/utils/constants";
import { Box, Button, Divider, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BoxHeader from "../../../components/common/BoxHeader";
import { useCustomToast } from "../../../hooks/useCustomToast";
import mp from "../../../services/mixpanel";
import { useAuth } from "../../Auth/AuthContext";

const PersonalDetails = () => {
  const auth = useAuth();
  const [user, setUser] = useState({ displayName: "", email: "" });
  const [status, setStatus] = useState<Status>(Status.idle);
  const [unsavedChanges, setUnsavedChanges] = useState<boolean>(false);
  const { createToast } = useCustomToast();

  useEffect(() => {
    if (auth.user) {
      setUser({
        displayName: auth.user.displayName || "",
        email: auth.user.email
      });
    }
  }, [auth.user]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnsavedChanges(true);
    const [key, value] = [e.target.name, e.target.value];
    setUser({ ...user, [key]: value });
  };

  const saveChanges = async () => {
    setStatus(Status.loading);
    return await auth.user
      .updateProfile({ displayName: user.displayName })
      .then(() => {
        mp.track("Общие настройки", {
          action: "name change",
          status: "success"
        });
        setUnsavedChanges(false);
        setStatus(Status.success);
        createToast("Сохраненные изменения", "success");
      })
      .catch((err) => {
        mp.track("Общие настройки", {
          action: "name change",
          status: "error",
          source: "Firebase"
        });
        setStatus(Status.error);
        createToast("Не удалось сохранить изменения", "error", err.message);
      });
  };

  return (
    <Box mb="8">
      <Box mb="8">
        <BoxHeader
          title="Полное имя"
          subtitle="Это имя, которое отображается в вашем общедоступном профиле"
          size={{ title: "lg", subtitle: "sm" }}
          mb="2.5"
        />
        <Input
          maxW="80"
          variant="outline"
          name="displayName"
          value={user.displayName}
          onChange={handleInput}
        />
      </Box>
      <Box mb="8">
        <BoxHeader
          title="Основной адрес электронной почты"
          subtitle="Это электронная почта, используемая для всех основных сообщений. Это не может быть изменено."
          size={{ title: "lg", subtitle: "sm" }}
          mb="2.5"
        />
        <Input
          maxW="80"
          variant="outline"
          name="email"
          value={user.email}
          onChange={handleInput}
          isDisabled
        />
      </Box>
      <Button
        colorScheme="green"
        isDisabled={!unsavedChanges}
        onClick={saveChanges}
        mb="2"
        size="sm"
        isLoading={status === Status.loading}
        loadingText="Saving changes"
      >
        Сохранить изменения
      </Button>
      <Divider />
    </Box>
  );
};

export default PersonalDetails;
