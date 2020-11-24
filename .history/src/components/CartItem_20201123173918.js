import React from "react";

export default function CartItem(props) {
  const { currencyFormat, feature, idx, selected } = props;
  const featureHash = feature + "-" + idx;
  const selectedOption = selected[feature];

  return (
    <div className="summary__option" key={featureHash}>
      <div className="summary__option__label">{feature} </div>
      <div className="summary__option__value">{selectedOption.name}</div>
      <div className="summary__option__cost">
        {currencyFormat.format(selectedOption.cost)}
      </div>
    </div>
  );
}