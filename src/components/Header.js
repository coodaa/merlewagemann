// components/Header.js
import React, { useState } from 'react';
import styles from "../styles/Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}><svg width="106" height="60" viewBox="0 0 106 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M64 49.4C62.7467 49.4 61.7333 49 60.96 48.2C60.2133 47.4 59.68 46.1467 59.36 44.44L55.12 22.68C55.0667 22.4133 55.04 22.2133 55.04 22.08C55.04 21.6 55.1867 21.24 55.48 21C55.8 20.7333 56.24 20.6 56.8 20.6C57.44 20.6 57.9067 20.7467 58.2 21.04C58.52 21.3067 58.7333 21.72 58.84 22.28L62.92 44.64C63.0533 45.28 63.2 45.72 63.36 45.96C63.52 46.1733 63.76 46.28 64.08 46.28C64.4267 46.28 64.68 46.16 64.84 45.92C65.0267 45.6533 65.16 45.24 65.24 44.68L68.2 24.56C68.3867 23.28 68.8133 22.3067 69.48 21.64C70.1467 20.9467 71.0267 20.6 72.12 20.6C73.2133 20.6 74.08 20.9467 74.72 21.64C75.3867 22.3333 75.8133 23.3067 76 24.56L78.92 44.68C79 45.24 79.1333 45.6533 79.32 45.92C79.5067 46.16 79.76 46.28 80.08 46.28C80.4 46.28 80.64 46.16 80.8 45.92C80.9867 45.68 81.1333 45.2533 81.24 44.64L85.36 22.28C85.4667 21.72 85.68 21.3067 86 21.04C86.32 20.7467 86.7867 20.6 87.4 20.6C88.5467 20.6 89.12 21.0933 89.12 22.08C89.12 22.2133 89.0933 22.4133 89.04 22.68L84.84 44.44C84.4933 46.0933 83.9467 47.3333 83.2 48.16C82.48 48.9867 81.4667 49.4 80.16 49.4C78.9067 49.4 77.92 49 77.2 48.2C76.5067 47.4 76.0267 46.16 75.76 44.48L72.92 25.04C72.84 24.56 72.7333 24.2267 72.6 24.04C72.4933 23.8267 72.3333 23.72 72.12 23.72C71.88 23.72 71.6933 23.8267 71.56 24.04C71.4533 24.2267 71.36 24.56 71.28 25.04L68.4 44.48C68.16 46.16 67.68 47.4 66.96 48.2C66.24 49 65.2533 49.4 64 49.4Z" fill="black"/>
<path d="M41.9309 10.6C43.1842 10.6 44.1976 11 44.9709 11.8C45.7176 12.6 46.2509 13.8533 46.5709 15.56L50.8109 37.32C50.8642 37.5867 50.8909 37.7867 50.8909 37.92C50.8909 38.4 50.7442 38.76 50.4509 39C50.1309 39.2667 49.6909 39.4 49.1309 39.4C48.4909 39.4 48.0242 39.2533 47.7309 38.96C47.4109 38.6933 47.1976 38.28 47.0909 37.72L43.0109 15.36C42.8776 14.72 42.7309 14.28 42.5709 14.04C42.4109 13.8267 42.1709 13.72 41.8509 13.72C41.5042 13.72 41.2509 13.84 41.0909 14.08C40.9042 14.3467 40.7709 14.76 40.6909 15.32L37.7309 35.44C37.5442 36.72 37.1176 37.6933 36.4509 38.36C35.7842 39.0533 34.9042 39.4 33.8109 39.4C32.7176 39.4 31.8509 39.0533 31.2109 38.36C30.5442 37.6667 30.1176 36.6933 29.9309 35.44L27.0109 15.32C26.9309 14.76 26.7976 14.3467 26.6109 14.08C26.4242 13.84 26.1709 13.72 25.8509 13.72C25.5309 13.72 25.2909 13.84 25.1309 14.08C24.9442 14.32 24.7976 14.7467 24.6909 15.36L20.5709 37.72C20.4642 38.28 20.2509 38.6933 19.9309 38.96C19.6109 39.2533 19.1442 39.4 18.5309 39.4C17.3842 39.4 16.8109 38.9067 16.8109 37.92C16.8109 37.7867 16.8376 37.5867 16.8909 37.32L21.0909 15.56C21.4376 13.9067 21.9842 12.6667 22.7309 11.84C23.4509 11.0133 24.4642 10.6 25.7709 10.6C27.0242 10.6 28.0109 11 28.7309 11.8C29.4242 12.6 29.9042 13.84 30.1709 15.52L33.0109 34.96C33.0909 35.44 33.1976 35.7733 33.3309 35.96C33.4376 36.1733 33.5976 36.28 33.8109 36.28C34.0509 36.28 34.2376 36.1733 34.3709 35.96C34.4776 35.7733 34.5709 35.44 34.6509 34.96L37.5309 15.52C37.7709 13.84 38.2509 12.6 38.9709 11.8C39.6909 11 40.6776 10.6 41.9309 10.6Z" fill="black"/>
</svg>
</div>

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