"use client";

import React from "react";
import styles from "./hero-section.module.css";
import { Box, Card, CardHeader, Typography } from "@mui/material";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Box className={styles.heroSection}>
      <Box className={styles.heroContent}>
        <Card className={styles.heroCard}>
          <CardHeader
            title={
              <Typography variant="h4" className={styles.heroTitle}>
                Welcome to our Website
              </Typography>
            }
            subheader={
              <Typography variant="body2">
                Discover amazing content and connect with our community.
              </Typography>
            }
          />
        </Card>
        <Image
          src="/hero-image.png"
          alt="Hero Image"
          className={styles.heroImage}
          width={400}
          height={400}
        />
      </Box>
    </Box>
  );
}
