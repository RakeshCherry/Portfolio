import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import AppContainer from '../components/AppContainer';
import theme from '../config/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </ChakraProvider>
  );
}

export default MyApp;
