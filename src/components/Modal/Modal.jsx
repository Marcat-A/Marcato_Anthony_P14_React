import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import css from "./Modal.module.css";

const Modal = ({ handleClose, text }) => {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "10vh",
      opacity: 0,
    },
  };
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={css.modal}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {text}
        <button type="button" className={css.btn} onClick={handleClose}>
          Close
        </button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
