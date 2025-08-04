"use client";

import React from "react";
import styles from "./nav-bar.module.css";
import Link from "next/link";

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
          About
        </Link>
        <Link href="#myProject" className={styles.link}>
          My Project
        </Link>
        <Link href="#contact" className={styles.link}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
