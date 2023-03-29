/* eslint-disable @next/next/no-title-in-document-head */
import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';
import theme from '../styles/theme';

export default function Document() {
  return (
    <Html lang='ru'>
      <Head>
        <title>Project R</title>

        <meta name='description' content='Project R' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
