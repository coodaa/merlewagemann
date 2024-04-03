import "../styles/globals.css";
import Layout from "../components/Layout";
import { ParallaxProvider } from 'react-scroll-parallax'; // Importiere ParallaxProvider

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider> {/* Umschließe den gesamten Inhalt mit ParallaxProvider */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ParallaxProvider>
  );
}

export default MyApp;
