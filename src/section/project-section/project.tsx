"use client";

import React from "react";
import styles from "./project.module.css";

const Project: React.ElementType = () => {
  return (
    <div className={styles.container} id={"myProject"}>
      <div className={styles.projectContainer}>
        <div>
          <h2 className={styles.projectTitle}>Facebook Clone</h2>
          <p className={styles.projectDescription}>
            This is a brief description of my project. It showcases the skills
            and technologies I have learned.
          </p>
        </div>
        <div>
          <h2 className={styles.projectTitle}>Todo App</h2>
          <p className={styles.projectDescription}>
            This is a brief description of my project. It showcases the skills
            and technologies I have learned.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
