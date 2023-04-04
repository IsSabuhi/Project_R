import { Box, BoxProps, Text, TextProps } from '@chakra-ui/layout';
import React from 'react';

export interface ISection {
  title: string;
  subtitle?: string;
  size?: { title: string; subtitle?: string };
  spacing?: string;
  titleProps?: TextProps;
  subtitleProps?: TextProps;
}

const Section: React.FC<ISection & BoxProps> = ({
  children,
  titleProps,
  title,
  subtitle,
  size = { title: '2xl', subtitle: 'md' },
  spacing = '0.5',
  subtitleProps = { color: '#808080' },
  ...props
}) => {
  return (
    <Box>
      <Box mb='8'>
        <Text {...titleProps} fontSize={size.title} fontWeight='semibold'>
          {title}
        </Text>
        <Box p={spacing} />
        <Text {...subtitleProps} fontSize={size.subtitle}>
          {subtitle}
        </Text>
      </Box>

      <Box
        display='flex'
        flexDir='column'
        justifyContent='space-between'
        w='80%'
        {...props}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Section;
