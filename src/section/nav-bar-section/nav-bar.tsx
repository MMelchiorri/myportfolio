"use client";

import React from "react";
import styles from "./nav-bar.module.css";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.container}>
      <div className={styles.logo}></div>

      <div className={styles.burger} onClick={toggleMenu}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>

      <div
        className={`${styles.information} ${menuOpen ? styles.showMenu : ""}`}
      >
        <Link href="#heroSection" className={styles.link} onClick={toggleMenu}>
          <HomeIcon style={{ marginRight: "0.5rem" }} /> About
        </Link>
        <Link href="#myProject" className={styles.link} onClick={toggleMenu}>
          <WorkIcon style={{ marginRight: "0.5rem" }} /> My Projects
        </Link>
        <Link href="#contact" className={styles.link} onClick={toggleMenu}>
          <ContactMailIcon style={{ marginRight: "0.5rem" }} /> Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
