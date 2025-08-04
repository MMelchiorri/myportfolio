"use client";

import React from "react";
import styles from "./nav-bar.module.css";
import Link from "next/link";

const NavBar: React.ElementType = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">Logo</Link>
      </div>
      <div className={styles.information}>
        <Link href="#heroSection">About</Link>
        <Link href="#myProject">My Project</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </div>
  );
};

export default NavBar;
