import Image from "next/image";
import React from "react";
import SEOHead from "../components/SEOHead";
import styles from "../styles/Index.module.css"; // Stelle sicher, dass die Pfade korrekt sind

export default function Index() {
  return (
    <div className={styles.container}>
      <SEOHead
        title="Merle Wagemann | Portfolio"
        description="Dies ist meine UX Portfolio Website"
        url="https://www.merlewagemann.de"
        imageUrl="https://www.merlewagemann.de/path/to/your/portfolio-image.png"
      />
      <nav className={styles.nav}></nav>
      <main className={styles.mainContent}>

      <div id="projects"> {/* Inhalt des Projects-Abschnitts */} </div>
<div id="about"> {/* Inhalt des About Me-Abschnitts */} </div>
<div id="resume"> {/* Inhalt des Resume-Abschnitts */} </div>

        <h1 className={styles.title}>
          Hi, Im Merle, a UX Designer with a decade of experience in customer
          service and e-commerce.
        </h1>
        <Image
          src="/images/merlewagemann.webp"
          alt="Merle Wagemann"
          width={500}
          height={300}
          layout="responsive"
          className={styles.profileImage}
        />
        <p className={styles.description}>
          Through roles from Store Manager to Customer Service Ambassador, Ive
          gained insights into product life cycles and building enduring
          customer relationships. My background in customer support and
          warehouse logistics has deepened my understanding of consumer needs
          and behaviors.
        </p>
        <button className={styles.contactButton}>Lets talk</button>
      </main>
    </div>
  );
}
