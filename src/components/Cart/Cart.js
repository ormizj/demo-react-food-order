import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "components/UI/Modal";
import CartContext from "store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onBackdropClick={props.onHideCart}>
      {cartItems}
      <div className={styles["total"]}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount}</span>
      </div>
      <div className={styles["actions"]}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={styles["button"]}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
