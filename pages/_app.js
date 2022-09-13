import Layout from "../components/Layout";
import { PageOffsetProvider } from "../context/PageOffsetProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <PageOffsetProvider>
        <Component {...pageProps} />
      </PageOffsetProvider>
    </Layout>
  );
}

export default MyApp;
