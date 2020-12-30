import 'tailwindcss/tailwind.css';
import 'keen-slider/keen-slider.min.css';
import '../styles/globals.css';

import { AppProps } from 'next/app';

import AppFooter from '../components/footer';
import AppHeader from '../components/header';
import { classFull } from '../utils';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="flex flex-col min-h-screen">
    <AppHeader />
    <main className={`${classFull} flex-1 pt-1`}>
      <Component {...pageProps} />
    </main>
    <AppFooter />
  </div>
);

export default MyApp;
