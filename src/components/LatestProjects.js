import React from "react";
import styles from "../styles/LatestProjects.module.css";
import Image from "next/image";
import Link from "next/link";

function LatestProjects() {
  const projects = [
    {
      id: 1,
      title: "Vocabulary Learning App",
      description: "UX Research & Low-Fi Wireframes",
      imageUrl: "/images/latestprojects/vocabulary.png",
      link: "https://www.berlincandy.de/",
    },
    {
      id: 2,
      title: "Mudflat Hiking Companion App",
      description: "UX Research & Responsive Web App",
      imageUrl: "/images/latestprojects/muddy.png",
      link: "https://www.berlincandy.de/",
    },
    {
      id: 3,
      title: "Berlin Candy Online Shop",
      description: "Design & Branding of an E-Commerce Shop",
      imageUrl: "/images/latestprojects/berlincandy.png",
      link: "https://www.berlincandy.de/",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>LATEST PROJECTS</h1>
      {projects.map((project) => (
        <Link key={project.id} href={project.link} passHref>
          <div className={styles.project}>
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.description}>{project.description}</p>
            <Image
              src={project.imageUrl}
              alt={project.title}
              layout="responsive"
              width={500}
              height={300}
              objectFit="cover"
              className={styles.hoverImage}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default LatestProjects;
