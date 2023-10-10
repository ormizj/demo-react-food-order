import React from "react";
import meals from "./../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles["header"]}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={meals} alt="meals.jpg" />
      </div>
    </>
  );
};

export default Header;
