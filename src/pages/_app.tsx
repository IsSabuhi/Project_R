import '@/styles/globals.css'
import { ChakraProvider, theme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '@/../apollo-client'
import { AuthProvider } from '@/hooks/use-auth-context'
import { SnackbarProvider } from 'notistack'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      autoHideDuration={3000}
    >
      <ApolloProvider client={client}>
        <AuthProvider>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </AuthProvider>
      </ApolloProvider>
    </SnackbarProvider>
  )
}
