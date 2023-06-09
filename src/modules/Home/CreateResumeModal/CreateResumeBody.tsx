import {
  ModalBody,
  Text,
  TextProps,
  useColorModeValue
} from "@chakra-ui/react";
import { SetStateAction } from "react";
import BoxHeader from "../../../components/common/BoxHeader";
import { ResumeMetadata, UserObject } from "../../User/types";
import { Method } from "./index";
import ResumeTemplateDropdown from "./ResumeTemplateMenu";
import ToggleCard from "./ToggleCard";

interface CreateResumeBodyProps {
  data: UserObject;
  method: Method;
  callback: (value: Method) => void;
  selectedHandlers: {
    value: ResumeMetadata;
    setValue: React.Dispatch<SetStateAction<ResumeMetadata>>;
  };
}

const CreateResumeBody: React.FC<CreateResumeBodyProps> = ({
  data,
  method,
  callback,
  selectedHandlers
}) => {
  const { value, setValue } = selectedHandlers;
  const titleLightModeProps = (id: Method): TextProps => ({
    color: method === id ? "blue.500" : "inherit"
  });

  const titleDarkModeProps = (id: Method): TextProps => ({
    color: method === id ? "blue.100" : "inherit"
  });

  const subtitleLightModeProps = (id: Method): TextProps => ({
    color: method === id ? "blue.500" : "inherit"
  });

  const subtitleDarkModeProps = (id: Method): TextProps => ({
    color: "whiteAlpha.800"
  });

  const titleProps = useColorModeValue(
    titleLightModeProps("EXISTING"),
    titleDarkModeProps("EXISTING")
  );

  const subtitleProps = useColorModeValue(
    subtitleLightModeProps("EXISTING"),
    subtitleDarkModeProps("EXISTING")
  );

  const textColor = useColorModeValue("gray", "whiteAlpha.800");

  return (
    <ModalBody display="flex" flexWrap={{ base: "wrap", md: "nowrap" }}>
      {data.active.length ? (
        <ToggleCard id="EXISTING" method={method} callback={callback}>
          <BoxHeader
            title="Начните с существующего резюме"
            subtitle="Продублируйте существующее резюме, чтобы начать работу быстрее, чем когда-либо."
            size={{ title: "md", subtitle: "sm" }}
            titleProps={titleProps}
            subtitleProps={subtitleProps}
          />
          <Text color={textColor} fontSize="sm" mb="2">
            Выберите резюме для использования в качестве шаблона
          </Text>
          <ResumeTemplateDropdown
            data={data}
            method={method}
            selectedHandlers={{ value, setValue }}
          />
        </ToggleCard>
      ) : null}
      <ToggleCard id="SCRATCH" method={method} callback={callback}>
        <BoxHeader
          title="Начните с нуля"
          subtitle="Начните с чистого листа. Настраивайте так, как вам нравится."
          size={{ title: "md", subtitle: "sm" }}
          titleProps={useColorModeValue(
            titleLightModeProps("SCRATCH"),
            titleDarkModeProps("SCRATCH")
          )}
          subtitleProps={useColorModeValue(
            subtitleLightModeProps("SCRATCH"),
            subtitleDarkModeProps("SCRATCH")
          )}
        />
      </ToggleCard>
    </ModalBody>
  );
};

export default CreateResumeBody;
