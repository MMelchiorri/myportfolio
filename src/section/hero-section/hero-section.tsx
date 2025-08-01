"use client";

import React from "react";
import styles from "./hero-section.module.css";
import { Box, Card, CardHeader, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Box className={styles.heroSection}>
      <Box className={styles.heroContent}>
        <Card className={styles.heroCard}>
          <CardHeader
            title={<Typography variant="h1">Welcome to our Website</Typography>}
            subheader={
              <Typography variant="body2">
                Discover amazing content and connect with our community.
              </Typography>
            }
          />
        </Card>
      </Box>
      <Box className={styles.heroImage}>
        <h1 className={styles.heroTitle}>Welcome to Our Website</h1>
        <p className={styles.heroDescription}>
          Discover amazing content and connect with our community.
        </p>
      </Box>
    </Box>
  );
}
