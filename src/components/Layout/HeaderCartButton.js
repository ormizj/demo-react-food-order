import React, { useContext, useEffect, useState } from "react";
import CartIcon from "components/Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const items = cartCtx.items;
  const totalCartItem = items.reduce((cur, item) => cur + item.amount, 0);
  const btnStyles = `${styles["button"]} ${btnIsHighlighted && styles["bump"]}`;

  // animation for header cart button, when adding/removing item from cart
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    // 300ms is the duration of the animation
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnStyles} onClick={props.onClick}>
      <span className={styles["icon"]}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles["badge"]}>{totalCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
