// pages/_app.js
import '../styles/globals.css'; // Importiere globale Styles, falls vorhanden
import Layout from '../components/Layout'; // Importiere Layout, falls verwendet

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
