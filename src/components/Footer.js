import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="/legal-notice" className={styles.link}>
            Impressum
          </Link>
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
