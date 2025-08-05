"use client";

import React from "react";
import styles from "./project.module.css";
import { Typography } from "@mui/material";
import Image from "next/image";
import { Grid } from "@mui/material";

const Project: React.ElementType = () => {
  return (
    <div className={styles.container} id={"myProject"}>
      <Grid
        container
        className={styles.projectContainer}
        justifyContent={"center"}
        gap={40}
      >
        <Grid size={{ md: 4 }}>
          <Typography variant={"h4"} style={{ whiteSpace: "nowrap" }}>
            Facebook Clone
          </Typography>
          <Image
            src="/img.png"
            alt="Facebook Image"
            className={styles.heroImage}
            width={400}
            height={365}
          />
        </Grid>
        <Grid size={{ md: 4 }}>
          <Typography variant={"h3"}>Todo App</Typography>

          <Image
            src="/hero-image.png"
            alt="Todo App Screenshot"
            className={styles.heroImage}
            width={400}
            height={365}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Project;
