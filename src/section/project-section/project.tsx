"use client";

import React from "react";
import styles from "./project.module.css";
import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { Grid } from "@mui/material";

const Project: React.ElementType = () => {
  return (
    <div className={styles.container} id={"myProject"}>
      <div className={styles.projectContainer}>
        <Grid size={{ md: 6 }}>
          <Paper className={styles.containerPaper}>
            <Typography variant={"h3"}>Facebook Clone</Typography>
            <div style={{ display: "flex", margin: "2rem" }}>
              <Typography
                variant={"body2"}
                className={styles.projectDescription}
              >
                Facebook UI Clone – Replica front-end di Facebook creata con
                HTML, CSS, JS e Axios. Simula interazioni API per esercitarsi
                nell’integrazione di dati anche senza backend.
              </Typography>
              <Image
                src="/hero-image.png"
                alt="Hero Image"
                className={styles.heroImage}
                width={400}
                height={365}
              />
            </div>
          </Paper>
        </Grid>
        <Grid size={{ md: 6 }}>
          <Paper className={styles.containerPaper}>
            <Typography variant={"h3"}>Todo App</Typography>
            <div style={{ display: "flex", margin: "2rem" }}>
              <Typography
                variant={"body2"}
                className={styles.projectDescription}
              >
                Todo App – Applicazione full-stack per la gestione di attività,
                sviluppata con Node.js, Express, React, MongoDB e Axios.
                Permette di creare, aggiornare e cancellare task in tempo reale.
                Il progetto è completamente containerizzato con Docker per
                garantire portabilità e facilità di deploy.
              </Typography>
              <Image
                src="/hero-image.png"
                alt="Todo App Screenshot"
                className={styles.heroImage}
                width={400}
                height={365}
              />
            </div>
          </Paper>
        </Grid>
      </div>
    </div>
  );
};

export default Project;
