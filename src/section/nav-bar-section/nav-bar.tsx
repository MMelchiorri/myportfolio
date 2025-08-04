"use client";

import React from "react";
import styles from "./nav-bar.module.css";
import Link from "next/link";
import { Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const NavBar: React.FC = () => {
  return (
    <div
      className={styles.container}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className={styles.logo}>
        <Link href="/" className={styles.link}>
          Logo
        </Link>
      </div>
      <div className={styles.information}>
        <Link href="#heroSection" className={styles.link}>
          <Typography variant="h6" className={styles.linkText}>
            <HomeIcon
              fontSize="small"
              style={{ verticalAlign: "middle", marginRight: "0.4rem" }}
            />
            About
          </Typography>
        </Link>
        <Link href="#myProject" className={styles.link}>
          <Typography variant="h6" className={styles.linkText}>
            <WorkIcon
              fontSize="small"
              style={{ verticalAlign: "middle", marginRight: "0.4rem" }}
            />
            My Project
          </Typography>
        </Link>
        <Link href="#contact" className={styles.link}>
          <Typography variant="h6" className={styles.linkText}>
            <ContactMailIcon
              fontSize="small"
              style={{ verticalAlign: "middle", marginRight: "0.4rem" }}
            />
            Contact
          </Typography>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
