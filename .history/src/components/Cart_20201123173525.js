import React from "react";
import CartItem from "../CartItem/CartItem";

export default function Cart(props) {
  const summary = Object.keys(props.selected).map((feature, idx) => (
    <CartItem {...props} feature={feature} idx={idx} />
  ));
  return summary;
}