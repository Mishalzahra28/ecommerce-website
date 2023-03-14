import React from "react";
import classes from "./productItem.module.css";
import { Link } from "react-router-dom";

function ProductItem(props) {
  return (
    <div className={classes.container}>
      <Link
        to={`/product/${props.id}`}
        state={{
          id: props.id,
          url: props.url,
          title: props.title,
          price: props.price,
          ref1: props.ref1,
          ref2: props.ref2,
          ref3: props.ref3,
        }}
        style={{ textDecoration: "none" }}
      >
        <img src={props.url} alt="" />
        <div>
          <h4 className={classes.title}>{props.title}</h4>
          <div className={classes.price}>₹ {props.price}</div>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
