import { Box, BoxProps } from "@chakra-ui/layout";
import Image from "next/image";
import Link from "next/link";

interface Props {
  width?: string;
  height?: string;
  href?: string;
}

const LogoSquare: React.FC<Props & BoxProps> = ({
  href = "/home",
  ...props
}) => {
  const src = "/logos/logo_sq_dark.svg";

  return (
    <Box display="flex" flexDir="column" w="fit-content" {...props}>
      <Link href={href} scroll={false}>
        <Image alt="" layout="fixed" src={src} width={10} height={10} />
      </Link>
    </Box>
  );
};

export default LogoSquare;
