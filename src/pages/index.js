import React from "react";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import SEOHead from "../components/SEOHead";
import SVG1 from "../components/svg/SVG1";
import SVG2 from "../components/svg/SVG2";
import SVG3 from "../components/svg/SVG3";
import styles from "../styles/Index.module.css";
export default function Index() {
  return (
    <div className={styles.container}>
      <SEOHead
        title="Merle Wagemann | Portfolio"
        description="Dies ist meine UX Portfolio Website"
        url="https://www.merlewagemann.de"
        imageUrl="https://www.merlewagemann.de/path/to/your/portfolio-image.png"
      />
      <main className={styles.mainContent}>
        <div className={styles.svgContainer}>
          <Parallax speed={-18}>
            <SVG1 className={styles.svg1} />
          </Parallax>
          <Parallax speed={-8}>
            <SVG2 className={styles.svg2} />
          </Parallax>
          <Parallax speed={10}>
            <SVG3 className={styles.svg3} />
          </Parallax>
        </div>

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
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Hi, I&apos;m Merle, a UX Designer with a decade of experience in
            customer service and e-commerce.
          </h1>
          <p className={styles.description}>
            Through roles from Store Manager to Customer Service Ambassador,
            I&apos;ve gained insights into product life cycles and building
            enduring customer relationships. My background in customer support
            and warehouse logistics has deepened my understanding of consumer
            needs and behaviors.
          </p>
          <button className={styles.contactButton}>Let&apos;s talk</button>
        </div>
      </main>
    </div>
  );
}
