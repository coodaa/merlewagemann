import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import Logo from "./Logo";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => scroll.scrollToTop()}>
        <Logo />
      </div>
      <div className={styles.menuWrapper}>
        <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`}>
          <ul>
            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="resume" smooth={true} duration={500}>
                Resume
              </Link>
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
