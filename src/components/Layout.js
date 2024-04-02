// Beispiel: src/components/Layout.js
import React from 'react';
import Header from './Header'; // Dein Header
import Footer from './Footer'; // Der Footer, den du gerade erstellt hast

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
