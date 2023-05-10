import { motion } from "framer-motion";
import React from "react";
import css from "./Backdrop.module.css";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className={css.backdrop}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
