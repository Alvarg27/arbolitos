import { useState } from "react";
import Layout from "../components/Layout";
import { PageOffsetProvider } from "../context/PageOffsetProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [offsetY, setOffsetY] = useState(0);

  return (
    <Layout>
      <PageOffsetProvider>
        <Component {...pageProps} offsetY={offsetY} />
      </PageOffsetProvider>
    </Layout>
  );
}

export default MyApp;
