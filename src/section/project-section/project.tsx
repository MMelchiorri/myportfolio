"use client";

import React from "react";
import styles from "./project.module.css";
import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";

const Project: React.ElementType = () => {
  return (
    <div className={styles.container} id={"myProject"}>
      <div className={styles.projectContainer}>
        <Box>
          <Paper className={styles.containerPaper}>
            <Typography variant={"h3"}>Facebook Clone</Typography>
            <div style={{ display: "flex" }}>
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
        </Box>
        <Box>
          <Paper className={styles.containerPaper}>
            <Typography variant={"h3"}>Todo App</Typography>
            <div style={{ display: "flex" }}>
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
        </Box>
      </div>
    </div>
  );
};

export default Project;
