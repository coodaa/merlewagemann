import React from "react";
import styles from "../styles/SkillsAndExperience.module.css";
import SvgIcon from "./SvgIcon";

function SkillsAndExperience() {
  const skills = [
    { id: 1, name: "Figma", icon: "figma" },
    // { id: 2, name: "Figma", icon: "figma" },
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
              <SvgIcon name={skill.icon} />

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
