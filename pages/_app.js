import { CategoriesProvider } from "../context/CategoriesProvider";
import { LanguageProvider } from "../context/LanguageProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <CategoriesProvider>
        <Component {...pageProps} />
      </CategoriesProvider>
    </LanguageProvider>
  );
}

export default MyApp;
