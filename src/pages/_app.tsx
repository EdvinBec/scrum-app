import '../styles/globals.scss';
import '../styles/Sidebar.scss';
import '../styles/Shelf.scss';
import '../styles/ShelfItem.scss';
import '../styles/ColorMode.scss';
import '../styles/PageHeader.scss';
import type { AppProps } from 'next/app';
import Layout from 'components/Layout';
import Sidebar from 'components/Sidebar';
import Shelf from 'components/Shelf';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Sidebar expanded={false} />
      <Shelf />
      <Component {...pageProps} />
    </Layout>
  );
}
