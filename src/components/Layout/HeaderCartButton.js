import React, { useContext } from "react";
import CartIcon from "components/Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const totalCartItem = cartCtx.items.reduce(
    (cur, item) => cur + item.amount,
    0
  );

  return (
    <button className={styles["button"]} onClick={props.onClick}>
      <span className={styles["icon"]}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles["badge"]}>{totalCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
