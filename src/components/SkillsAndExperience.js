import React from "react";
import styles from "../styles/SkillsAndExperience.module.css";

function SkillsAndExperience() {
  const skills = [
    { id: 1, name: "Figma", icon: "/path/to/figma-icon.svg" },
    { id: 2, name: "Wireframing", icon: "/path/to/wireframe-icon.svg" },
    { id: 3, name: "Canva", icon: "/path/to/canva-icon.svg" },
    { id: 4, name: "Prototyping", icon: "/path/to/prototype-icon.svg" },
    { id: 5, name: "Trello", icon: "/path/to/trello-icon.svg" },
    { id: 6, name: "Miro", icon: "/path/to/miro-icon.svg" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>SKILLS &</span>
        <span>EXPERIENCE</span>
        <p className={styles.introduction}>
          UX Designer with a unique analytical background in musicology ♫,
          complemented by several years of experience in customer service and
          e-commerce 🦋. Proficient in fostering long-lasting customer
          relationships and excelling in performance marketing by consistently
          going the extra mile 🏃🏼‍♀️. Currently focused on user experience design,
          leveraging the expertise in physical products to enhance digital
          product interactions ✨.
        </p>
        <h2>Skills</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill.id} className={styles.skillItem}>
              <img
                src={skill.icon}
                alt={skill.name}
                className={styles.skillIcon}
              />
              <a>{skill.name}</a>
            </div>
          ))}
        </div>
      </div>
      <h2>Experience</h2>
    </div>
  );
}

export default SkillsAndExperience;
