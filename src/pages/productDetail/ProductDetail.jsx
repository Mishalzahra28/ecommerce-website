import React, { useContext, useRef, useState } from "react";
import Button from "@mui/material/Button";
import classes from "./detail.module.css";
import { useLocation } from "react-router-dom";
import CartContext from "../../store/CartContext";
import { toast } from "react-toastify";

export const ProductDetails = () => {
  const cartCtx = useContext(CartContext);
  const location = useLocation();
  const data = location.state;
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    addToCartHandler(enteredAmountNumber);
    toast.success("Item Added to Cart");
  };

  const addToCartHandler = (amount) => {
    console.log("item added");
    console.log(amount);
    cartCtx.addItem({
      id: data.id,
      title: data.title,
      amount: amount,
      price: data.price,
    });
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.images}>
          <img src={data.ref1} alt="not found" />
          <img src={data.ref2} alt="not found" />
          <img src={data.ref3} alt="not found" />
        </div>
        <div className={classes.title}>{data.title}</div>
        <div className={classes.discrip}>
          F0069/101/901-50427844 <br />
          The model is wearing size: L; Model height: 6.0ft / 183cm
        </div>
        <div className={classes.price}>Rs {data.price}.00</div>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.inputField}>
            <span>Quantity:</span>
            <input
              label="Amount"
              type="number"
              min="1"
              max="5"
              step="1"
              defaultValue="1"
              className={classes.input}
              ref={amountInputRef}
            />

            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
          </div>
          <Button
            variant="contained"
            type="submit"
            sx={{
              color: "#fff",
              width: 150,
              padding: 1.3,
              fontWeight: 600,

              bgcolor: "#d3963c",
              ":hover": {
                bgcolor: "#e19d36ae",
              },
            }}
          >
            ADD TO CART
          </Button>
        </form>
      </div>
    </>
  );
};
export default ProductDetails;
