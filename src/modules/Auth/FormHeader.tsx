import { HStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { LogoSquare, LogoWithText } from "../../components/layouts/Logos";

const AuthFormHeader: React.FC<{ title: string; hideTitle: boolean }> = ({
  title,
  hideTitle
}) => {
  return (
    <>
      <HStack
        flex="1 0"
        flexBasis="60%"
        marginBottom={"1.5rem"}
        spacing={"1rem"}
      >
        {/* <LogoSquare href="/" />
        <LogoWithText /> */}
      </HStack>
      {!hideTitle && (
        <Text fontSize={"36px"} mb="2rem" letterSpacing={"tight"}>
          {title}
        </Text>
      )}
    </>
  );
};

export default AuthFormHeader;
