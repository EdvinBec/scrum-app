import '../styles/globals.scss';
import '../styles/Sidebar.scss';
import type { AppProps } from 'next/app';
import Layout from 'components/Layout';
import Sidebar from 'components/Sidebar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Sidebar expanded={false} />
      <Component {...pageProps} />
    </Layout>
  );
}
