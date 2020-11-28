// import React from "react";
// import Cart from "./Cart";
// import Total from "./Total";

// export default function MainSummary(props) {
//   const { currencyFormat } = props;
//   return (
//     <div>
//       <Cart currencyFormat={currencyFormat} {...props} />
//       <Total currencyFormat={currencyFormat} {...props} />
//     </div>
//   );
// }

import React from 'react';

function FeatureSummary(props) {
    const featureHash = props.featurehash;
    return (
        <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{props.feature} </div>
            <div className="summary__option__value">{props.selectedOption.name}</div>
            <div className="summary__option__cost">
            {props.uscurrencyformat.format(props.selectedOption.cost)}
            </div>
        </div>
    );
}

export default FeatureSummary;
