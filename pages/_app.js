import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import { PageOffsetProvider } from "../context/PageOffsetProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.style.display = "none";
    }
  }, []);

  return (
    <Layout>
      <PageOffsetProvider>
        <Component {...pageProps} offsetY={offsetY} />
      </PageOffsetProvider>
    </Layout>
  );
}

export default MyApp;
