import React from "react";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      Created by{" "}
      <a href="https://anthony-marcato.fr" target="_blank" rel="noreferrer">
        Anthony Marcato 🐼
      </a>
    </footer>
  );
};

export default Footer;
