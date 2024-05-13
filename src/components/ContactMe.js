// components/ContactMe.js
import React from "react";
import styles from "../styles/ContactMe.module.css";

const ContactMe = () => {
  return (
    <div className={styles.contactMeContainer}>
      <a href="mailto:hi@merlewagemann.de" className={styles.contactMeButton}>
        Contact me!
      </a>
    </div>
  );
};

export default ContactMe;
