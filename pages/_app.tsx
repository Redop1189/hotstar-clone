import '../styles/index.css';

import { AppProps } from 'next/app';

import Header from '../components/header/Header';
import MainLayout from '../layouts/MainLayout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </>
);

export default MyApp;
