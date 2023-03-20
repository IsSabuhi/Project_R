import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, BoxProps, Text } from "@chakra-ui/layout";
import Image from "next/image";
import Link from "next/link";

interface Props {
  hasTagline?: boolean;
  width?: string;
  height?: string;
  variant?: "light" | "dark";
}

const LogoWithText: React.FC<Props & BoxProps> = ({
  hasTagline = false,
  variant,
  width = 10,
  height = 32,
  ...props
}) => {
  const taglineColor = useColorModeValue("gray.500", "whiteAlpha.700");
  const colorModeDefaultLogo = useColorModeValue(
    "/logos/text_dark.svg",
    "/logos/text_light.svg"
  );
  const src =
    variant === "light"
      ? "/logos/text_light.svg"
      : variant === "dark"
      ? "/logos/text_dark.svg"
      : colorModeDefaultLogo;

  return (
    <Box display="flex" flexDir="column" w="fit-content" {...props}>
      <Link href="/" scroll={false}>
        <Image alt="" layout="fixed" src={src} width={width} height={height} />
      </Link>
      {hasTagline && (
        <Text fontSize="sm" fontWeight="medium" color={taglineColor}>
          Создавайте красивые одностраничные резюме за считанные минуты
        </Text>
      )}
    </Box>
  );
};

export default LogoWithText;
