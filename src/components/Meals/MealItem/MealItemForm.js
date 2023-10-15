import React, { useRef, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "components/UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().trim === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 9
    ) {
      setAmountIsValid(false);
      return;
    }

    // calling parent function, because not all needed information is present here
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={styles["form"]} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: "number",
          min: "1",
          max: "9",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-9)</p>}
    </form>
  );
};

export default MealItemForm;
