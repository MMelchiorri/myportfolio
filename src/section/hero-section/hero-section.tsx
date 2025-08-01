"use client";

import React from "react";
import styles from "./hero-section.module.css";
import { Box } from "@mui/material";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome to Our Website</h1>
        <p className={styles.heroDescription}>
          Discover amazing content and connect with our community.
        </p>
        <button className={styles.heroButton}>Get Started</button>
      </div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome to Our Website</h1>
        <p className={styles.heroDescription}>
          Discover amazing content and connect with our community.
        </p>
        <button className={styles.heroButton}>Get Started</button>
      </div>
    </section>
  );
}
