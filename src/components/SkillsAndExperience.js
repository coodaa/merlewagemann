import React from "react";
import styles from "../styles/SkillsAndExperience.module.css";
import SvgIcon from "./SvgIcon";

function SkillsAndExperience() {
  const skills = [
    { id: 1, name: "Figma", icon: "figma" },
    { id: 2, name: "Wireframing", icon: "wireframing" },
    { id: 3, name: "Canva", icon: "canva" },
    { id: 4, name: "Prototyping", icon: "prototyping" },
    { id: 5, name: "Trello", icon: "trello" },
    { id: 6, name: "Miro", icon: "miro" },
    { id: 7, name: "Shopify", icon: "shopify" },
  ];

  const experiences = [
    {
      period: "Aug 2023 – Present",
      title: "Professionel Development & UX Certificate",
      company: "Career Foundry",
    },
    {
      period: "Oct 2023 – Present",
      title: "Co-Founder of Berlin Candy (Freeze Dried Candys)",
      company: "Berlin Candy",
    },
    {
      period: "2020 – 2023",
      title: "Store Manager Fashion Retail",
      company: "Monkind Berlin",
    },
    {
      period: "2012 – 2021",
      title: "Sales Advisor & Customer Service Ambassador",
      company: "COS Berlin",
    },
    {
      period: "Jun 2012 – Sept 2012",
      title: "Intern Project Management",
      company: "White Horse Music (Jung von Matt)",
    },
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
      <div className={styles.experienceSection}>
        <h2>Experience</h2>
        <div className={styles.experience}>
          {experiences.map((exp, index) => (
            <React.Fragment key={index}>
              <div className={styles.experienceItem}>
                <div className={styles.period}>{exp.period}</div>
                <div>
                  <div className={styles.title}>{exp.title}</div>
                  <div className={styles.company}>{exp.company}</div>
                </div>
              </div>
              {index < experiences.length - 1 && (
                <hr className={styles.divider} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsAndExperience;
