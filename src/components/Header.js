import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import Logo from "./Logo";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Funktion, um das Menü zu schließen
  const handleClose = () => {
    setIsOpen(false);
  };

  // Verbesserte handleClose-Funktion, die auch für react-scroll Links funktioniert
  const handleLinkClick = () => {
    handleClose();
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className={styles.menuWrapper}>
        {isOpen && (
          <div className={styles.closeMenu} onClick={handleClose}>
            X
          </div>
        )}
        <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`}>
          <ul>
            <li onClick={handleLinkClick}>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                onClick={handleClose}
              >
                Projects
              </ScrollLink>
            </li>
            <li onClick={handleLinkClick}>
              <Link href="/about-me">About Me</Link>
            </li>
            <li onClick={handleLinkClick}>
              <ScrollLink
                to="resume"
                smooth={true}
                duration={500}
                onClick={handleClose}
              >
                Resume
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
