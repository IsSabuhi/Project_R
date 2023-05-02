import '@/styles/globals.css'
import { ChakraProvider, theme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '@/../apollo-client'
import { AuthProvider } from '@/hooks/use-auth-context'
import { SnackbarProvider } from 'notistack'
import { useRouter } from 'next/router'
import MainLayout from '@/layout/MainLayout'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const hideSidebar =
    router.pathname === '/login' || router.pathname === '/signup'

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
            {!hideSidebar ? (
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>
            ) : (
              <Component {...pageProps} />
            )}
          </ChakraProvider>
        </AuthProvider>
      </ApolloProvider>
    </SnackbarProvider>
  )
}

// {!hideSidebar ? (
//   <MainLayout>
//     <Component {...pageProps} />
//   </MainLayout>
// ) : (
//   <Component {...pageProps} />
// )}
