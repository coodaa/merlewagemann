// pages/about-me.js
import React from "react";
import styles from "../styles/AboutMe.module.css";
import SEOHead from "../components/SEOHead";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <SEOHead title="About Me | Merle Wagemann" />
      <main className={styles.mainContent}>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.profileSection}>
          <img
            src="/images/merlewagemann.webp"
            alt="Merle Wagemann"
            className={styles.profileImage}
          />
          <div className={styles.profileText}>
            <p>
              Hi, I’m Merle Wagemann, a passionate UX Designer with over a
              decade of experience in customer service and e-commerce. My
              journey through various roles, including Store Manager and
              Customer Service Ambassador, has provided me with a profound
              understanding of product life cycles and the art of building
              long-lasting customer relationships.
            </p>
            <p>
              I hold a unique analytical background in musicology, which
              complements my skills in user experience design. My ability to
              foster long-lasting customer relationships and excel in
              performance marketing has consistently driven me to go the extra
              mile.
            </p>
            <p>
              Currently, I focus on enhancing digital product interactions by
              leveraging my expertise in physical products. My aim is to create
              seamless and intuitive user experiences that meet the needs of
              both businesses and users.
            </p>
          </div>
        </div>
        <div className={styles.experienceSection}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Career Foundry</strong> - Professional Development & UX
              Certificate (Aug 2023 - Present)
            </li>
            <li className={styles.listItem}>
              <strong>Berlin Candy</strong> - Co-Founder (Oct 2023 - Present)
            </li>
            <li className={styles.listItem}>
              <strong>Monkind Berlin</strong> - Store Manager Fashion Retail
              (2020 - 2023)
            </li>
            <li className={styles.listItem}>
              <strong>COS Berlin</strong> - Sales Advisor & Customer Service
              Ambassador (2012 - 2021)
            </li>
            <li className={styles.listItem}>
              <strong>White Horse Music (Jung von Matt)</strong> - Intern
              Project Management (Jun 2012 - Sept 2012)
            </li>
          </ul>
        </div>
        <div className={styles.skillsSection}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Figma</li>
            <li className={styles.listItem}>Wireframing</li>
            <li className={styles.listItem}>Canva</li>
            <li className={styles.listItem}>Prototyping</li>
            <li className={styles.listItem}>Trello</li>
            <li className={styles.listItem}>Miro</li>
            <li className={styles.listItem}>Shopify</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default AboutMe;
