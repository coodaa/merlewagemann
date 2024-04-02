// src/components/Footer.js
import React from 'react';
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span>© {new Date().getFullYear()} Merle Wagemann. Alle Rechte vorbehalten.</span>
      </div>
    </footer>
  );
};

export default Footer;
