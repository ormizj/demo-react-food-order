import React from "react";
import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div className={styles["backdrop"]} onClick={props.onClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles["modal"]}>
      <div className={styles["content"]}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <>
      {createPortal(
        <>
          <Backdrop onClick={props.onBackdropClick} />
          <ModalOverlay>{props.children}</ModalOverlay>
        </>,
        portalElement
      )}
    </>
  );
};

export default Modal;
