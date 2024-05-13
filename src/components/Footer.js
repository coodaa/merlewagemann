// src/components/Footer.js
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="/imprint" className={styles.link}>
            Impressum
          </a>
          <a
            href="https://www.linkedin.com/in/merlewagemann"
            className={styles.link}
          >
            LinkedIn
          </a>
          <a
            href="https://www.behance.net/merlewagemann"
            className={styles.link}
          >
            Behance
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
