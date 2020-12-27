import 'tailwindcss/tailwind.css';
import 'keen-slider/keen-slider.min.css';
import '../styles/globals.css';

import { AppProps } from 'next/app';

import AppHeader from '../components/header';
import { classFull } from '../utils';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <AppHeader />
    <main className={`${classFull} pt-1 pb-8`}>
      <Component {...pageProps} />
    </main>
  </>
);

export default MyApp;
