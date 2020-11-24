import React from "react";
import Cart from "./Cart";
import Total from "./Total";

export default function MainSummary(props) {
  const { currencyFormat } = props;
  return (
    <div>
      <Cart currencyFormat={currencyFormat} {...props} />
      <Total currencyFormat={currencyFormat} {...props} />
    </div>
  );
}
