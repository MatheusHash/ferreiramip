import { AuthProvider } from '../contexts/AuthContext'
import { ChakraProvider, extendTheme, CSSReset } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'
import theme from '../styles/theme'
import Head from 'next/head'

const myTheme= extendTheme(theme)

const GlobalStyle = ({children})=>(
  <>
    <Head>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
    </Head>
    <CSSReset />
    <Global 
      styles={
        css`
          html{
            scroll-behavior: smooth;
          }

          #__next{
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `
      }
    />
    {children}
  </>
)

function MyApp({ Component, pageProps }) {
  return(
      <ChakraProvider theme={myTheme}>
        <AuthProvider>
          <GlobalStyle />
          <Component {...pageProps} />
         </AuthProvider>
      </ChakraProvider>

  ) 
  
}

export default MyApp
