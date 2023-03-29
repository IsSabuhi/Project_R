import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import DefaultTheme from '../styles/theme';

/* <--- Font Imports ---> */
import '@fontsource/inter';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/lora';
import '@fontsource/manrope';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/manrope/800.css';
import '@fontsource/nunito';
import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import '@fontsource/pt-serif';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={DefaultTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
