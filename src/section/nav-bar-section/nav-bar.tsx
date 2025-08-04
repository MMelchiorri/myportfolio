"use client";

import React from "react";
import styles from "./nav-bar.module.css";
import Link from "next/link";
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
      <div className={styles.logo}></div>
      <div className={styles.information}>
        <Link href="#heroSection" className={styles.link}>
          <HomeIcon style={{ marginRight: "1rem" }} />
        </Link>
        <Link href="#myProject" className={styles.link}>
          <WorkIcon style={{ marginRight: "1rem" }} />
        </Link>
        <Link href="#contact" className={styles.link}>
          <ContactMailIcon style={{ marginRight: "1rem" }} />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
