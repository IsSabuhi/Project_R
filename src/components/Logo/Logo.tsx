import { Box, BoxProps } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import icon from '@/assets/favicon.ico';

interface ILogo {
  width?: string;
  height?: string;
  href?: string;
}

const Logo: React.FC<ILogo & BoxProps> = ({ href = '/home', ...props }) => {
  const src = icon;
  return (
    <Box display='flex' flexDir='column' w='fit-content' {...props}>
      <Link href={href} scroll={false}>
        <Image alt='' layout='fixed' src={src} width={10} height={10} />
      </Link>
    </Box>
  );
};

export default Logo;
