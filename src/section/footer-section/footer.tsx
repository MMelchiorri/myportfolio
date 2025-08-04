"use client";

import React from "react";
import styles from "./footer.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

const Footer: React.ElementType = () => {
  return (
    <div className={styles.container} id={"contact"}>
      <Link
        className={styles.link}
        href="https://www.linkedin.com/in/marco-melchiorri/"
        target="_blank"
      >
        <LinkedInIcon />
      </Link>
      <Link
        className={styles.link}
        href={"https://github.com/MMelchiorri"}
        target={"_blank"}
      >
        <GitHubIcon />
      </Link>
    </div>
  );
};

export default Footer;
