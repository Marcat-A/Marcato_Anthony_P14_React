import React from "react";
import css from "./NotFound.module.css";

const NotFound = () => {
  return (
    <main className={css.notFound}>
      <span>Error 404</span>Not Found !
      <span className={css.text}>Please go back to the home page.</span>
    </main>
  );
};

export default NotFound;
