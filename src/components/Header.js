// components/Header.js
import React, { useState } from 'react';
import styles from "../styles/Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>

      <nav className={`${styles.nav} ${isOpen ? styles.show : ''}`}>
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </nav>

      <div className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
