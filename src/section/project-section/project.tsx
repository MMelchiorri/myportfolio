"use client";

import React from "react";
import styles from "./project.module.css";
import { Typography } from "@mui/material";
import Image from "next/image";
import { Grid } from "@mui/material";

const Project: React.ElementType = () => {
  return (
    <div className={styles.container} id={"myProject"}>
      <Grid container className={styles.projectContainer}>
        <Grid size={{ md: 6 }}>
          <Image
            src="/img.png"
            alt="Facebook Image"
            className={styles.heroImageLeft}
            width={400}
            height={365}
          />
        </Grid>
        <Grid size={{ md: 6 }} className={styles.projectDetails}>
          <Typography variant="body1" className={styles.projectDescription}>
            Applicazione full-stack per la gestione delle attività, sviluppata
            con Node.js, Express, React, MongoDB e Axios. Completamente
            containerizzata con Docker.
          </Typography>

          <a
            href="https://github.com/tuo-nome/todo-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visitButton}
          >
            Visita Repo →
          </a>
        </Grid>
      </Grid>
      <Grid container>
        <Grid size={{ md: 6 }} className={styles.projectDetails}>
          <Typography variant="body1" className={styles.projectDescription}>
            Applicazione full-stack per la gestione delle attività, sviluppata
            con Node.js, Express, React, MongoDB e Axios. Completamente
            containerizzata con Docker.
          </Typography>

          <a
            href="https://github.com/tuo-nome/todo-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.visitButton}
          >
            Visita Repo →
          </a>
        </Grid>
        <Grid size={{ md: 6 }}>
          <Image
            src="/img_1.png"
            alt="Todo App Screenshot"
            className={styles.heroImageRight}
            width={400}
            height={365}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Project;
