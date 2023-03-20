import client from "@/apollo-client";
import { ChakraProvider } from "@chakra-ui/react";
import { enableMapSet } from "immer";
import { AppProps } from "next/app";
import Router from "next/router";
import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { AuthProvider } from "../modules/Auth/AuthContext";
import "../styles/globals.css";
import DefaultTheme from "../styles/theme";
import progress from "../widgets/ProgressBar";
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
/*<---События маршрутизатора--->*/
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);
/* <--- Включение Immer ---> */
enableMapSet();

function MyApp({ Component, pageProps }: AppProps) {
  //Чтобы включить React-запрос в SSR
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <ChakraProvider theme={DefaultTheme}>
          <QueryClientProvider client={queryClientRef.current}>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </Hydrate>
          </QueryClientProvider>
        </ChakraProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default MyApp;
