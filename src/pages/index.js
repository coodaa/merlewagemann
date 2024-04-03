import React from "react";
import Image from "next/image";
import { Parallax } from 'react-scroll-parallax';
import SEOHead from "../components/SEOHead";
import SVG1 from "../components/svg/SVG1"; // Pfad anpassen
import SVG2 from "../components/svg/SVG2"; // Pfad anpassen
import styles from "../styles/Index.module.css"; // Pfad anpassen

export default function Index() {
  return (
    <div className={styles.container}>
      <SEOHead
        title="Merle Wagemann | Portfolio"
        description="Dies ist meine UX Portfolio Website"
        url="https://www.merlewagemann.de"
        imageUrl="https://www.merlewagemann.de/path/to/your/portfolio-image.png"
      />
      {/* SVGs mit Parallax-Effekt */}
      <Parallax speed={-10}>
        <SVG1 />
      </Parallax>
      <Parallax speed={10}>
        <SVG2 />
      </Parallax>
      <main className={styles.mainContent}>
        {/* Bild */}
        <div className={styles.profileImageWrapper}>
          <Image
            src="/images/merlewagemann.webp"
            alt="Merle Wagemann"
            width={500}
            height={300}
            layout="responsive"
            className={styles.profileImage}
          />
        </div>
        {/* Text und Button */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Hi, I am Merle, a UX Designer with a decade of experience in customer service and e-commerce.
          </h1>
          <p className={styles.description}>
            Through roles from Store Manager to Customer Service Ambassador, I have gained insights into product life cycles and building enduring customer relationships. My background in customer support and warehouse logistics has deepened my understanding of consumer needs and behaviors.
          </p>
          <button className={styles.contactButton}>Let us talk</button>
        </div>
      </main>
    </div>
  );
}
