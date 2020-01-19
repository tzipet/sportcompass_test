import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div>
          <div>January 2020 </div>
        </div>
        <div>
          <div>Created by Giorgos Petrou</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
