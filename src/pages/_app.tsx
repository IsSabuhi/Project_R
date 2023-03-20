import client from "@/apollo-client";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

import "../styles/globals.css";
import DefaultTheme from "../styles/theme";
import { ApolloProvider } from "@apollo/client";
/* <--- Resume Font Imports ---> */
import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/lora";
import "@fontsource/manrope";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "@fontsource/nunito";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import "@fontsource/pt-serif";
import { AuthProvider } from "../hooks/use-auth-context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <ChakraProvider theme={DefaultTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default MyApp;
