import 'tailwindcss/tailwind.css';
import 'keen-slider/keen-slider.min.css';
import '../styles/globals.css';

import { AppProps } from 'next/app';

import AppFooter from '../components/footer';
import AppHeader from '../components/header';
import { classFull } from '../utils';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <AppHeader />
    <main className={`${classFull} pt-1`} style={{ minHeight: 'calc(100vh - 6rem)' }}>
      <Component {...pageProps} />
    </main>
    <AppFooter />
  </>
);

export default MyApp;
