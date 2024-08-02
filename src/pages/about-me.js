// pages/about-me.js
import React from "react";
import Image from "next/image";
import styles from "../styles/AboutMe.module.css";
import SEOHead from "../components/SEOHead";
import WaveSVG from "../components/WaveSVG";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <SEOHead title="About Me | Merle Wagemann" />
      <main className={styles.mainContent}>
        <h1 className={styles.title}>About Me</h1>
        <WaveSVG />
        <div className={styles.likesSection}>
          <h2>What I like</h2>
          <div className={styles.imageCard}>
            <Image
              src="/images/like-twin-sister.jpg"
              alt="spending time with my twinnie"
              width={300}
              height={300}
              className={styles.image}
            />
            <p>spending time with my twinnie</p>
          </div>
          <div className={styles.imageCard}>
            <Image
              src="/images/like-carousel.jpg"
              alt="riding the carousel Musikexpress"
              width={300}
              height={300}
              className={styles.image}
            />
            <p>riding the carousel Musikexpress</p>
          </div>
          <div className={styles.imageCard}>
            <Image
              src="/images/like-tractor.jpg"
              alt="driving a tractor with my son at Karls Erdbeerhof"
              width={300}
              height={300}
              className={styles.image}
            />
            <p>driving a tractor with my son at Karls Erdbeerhof</p>
          </div>
        </div>
        <div className={styles.dislikesSection}>
          <h2>What I dont like</h2>
          <div className={styles.imageCard}>
            <Image
              src="/images/dont-like-ladybug.jpg"
              alt="spending time with my twinnie"
              width={300}
              height={300}
              className={styles.image}
            />
            <p>spending time with my twinnie</p>
          </div>
          <div className={styles.imageCard}>
            <Image
              src="/images/dont-like-icecream.jpg"
              alt="sharing my Spaghetti ice cream"
              width={300}
              height={300}
              className={styles.image}
            />
            <p>sharing my Spaghetti ice cream</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutMe;
