"use client";

import React, { useEffect, useRef } from "react";
import styles from "./hero-section.module.css";
import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const text = titleRef.current?.textContent || "";
    titleRef.current!.textContent = "";

    [...text].forEach((char, index) => {
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.textContent += char;
        }
      }, index * 100);
    });
  }, []);

  return (
    <Box className={styles.heroSection}>
      <Box className={styles.heroContent}>
        <Paper
          className={styles.heroCard}
          elevation={3}
          sx={{
            padding: "2rem",
            borderLeft: "6px solid #134E4A",
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Typography
            variant="h4"
            ref={titleRef}
            className={styles.heroTitle}
            sx={{
              fontFamily: "Montserrat-regular",
              color: "#134E4A",
              marginBottom: "1rem",
              fontWeight: 600,
              fontSize: "2rem",
            }}
          >
            Benvenuti.
          </Typography>

          <Typography
            className={styles.heroSubtitle}
            sx={{
              fontFamily: "var(--font-inter)",
              color: "#333333",
              lineHeight: 1.7,
            }}
          >
            Mi chiamo Marco, sono nello sviluppo backend da 4 anni, lavoro con
            Node.js, TypeScript, React, Nextjs, MongoDB e MySQL. Mi piace creare
            API performanti, scrivere codice pulito e collaborare su progetti
            sfidanti. Fuori dal codice, suono la batteria, leggo e faccio
            escursionismo. Amo anche il basket, che mi ha insegnato disciplina,
            collaborazione e resilienza.
          </Typography>
        </Paper>

        <Image
          src="/hero-image.png"
          alt="Hero Image"
          className={styles.heroImage}
          width={400}
          height={365}
        />
      </Box>
    </Box>
  );
}
