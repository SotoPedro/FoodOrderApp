import React, { useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = ({ id, onAddtoCart}) => {
  const inputRef = useRef();
  const [isValid, setisValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputRef.current.value;

    if (
      enteredAmount.trim().length === 0 ||
      +enteredAmount < 1 ||
      +enteredAmount > 5
    ) {
      setisValid(false);
      return;
    }

    onAddtoCart(+enteredAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        content="Amount"
        id={"amount" + id}
        input={{
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">Add to cart</button>
      {!isValid && <p>Please provide a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
