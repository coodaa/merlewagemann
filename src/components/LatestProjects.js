// components/LatestProjects.js
import React from "react";
import styles from "../styles/LatestProjects.module.css";
import Image from "next/image";

function LatestProjects() {
  const projects = [
    {
      id: 1,
      title: "Vocabulary Learning App",
      description: "UX Research & Low-Fi Wireframes",
      imageUrl: "/images/latestprojects/vocabulary.png",
    },
    {
      id: 2,
      title: "Mudflat Hiking Companion App",
      description: "UX Research & Responsive Web App",
      imageUrl: "/images/latestprojects/muddy.png",
    },
    {
      id: 3,
      title: "Berlin Candy Online Shop",
      description: "Design & Branding of an E-Commerce Shop",
      imageUrl: "/images/latestprojects/berlincandy.png",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>LATEST PROJECTS</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.description}>{project.description}</p>
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={500}
            height={300}
            margin-left={10}
          />
        </div>
      ))}
    </div>
  );
}

export default LatestProjects;
