import {Roboto} from 'next/font/google'
import type { AppProps } from 'next/app'

import { globalStyles } from '../styles/global';

import { Container } from '../styles/pages/app';
import { Header } from '../components/Header';
import { CartContextProvider } from '../context/CartContext';

const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin']
})

globalStyles();

function App({ Component, pageProps }: AppProps) {

  return (
    <CartContextProvider>
        <Container className={roboto.className}>
            <Header />
            <Component {...pageProps} />
        </Container>
    </CartContextProvider>
  )
}

export default App
