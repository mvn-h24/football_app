import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Header } from '@football-app/app/ui';

const linksList = [
  {
    url: '/teams',
    title: 'Teams list',
  },
  {
    url: '/competitions',
    title: 'Competitions list',
  },
];
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to football-api web-app!</title>
      </Head>
      <Header linkList={linksList} />
      <main className="app h-full flex flex-col bg-black">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
