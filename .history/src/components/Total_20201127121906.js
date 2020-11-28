  
// import React from "react";

// export default function Total(props) {
//   const { currencyFormat, selected } = props;
//   const total = Object.keys(selected).reduce(
//     (acc, curr) => acc + selected[curr].cost,
//     0
//   );
//   return (
//     <div className="summary__total">
//       <div className="summary__total__label">Total</div>
//       <div className="summary__total__value">
//         {currencyFormat.format(total)}
//       </div>
//     </div>
//   );
// }

import React from 'react';

export default function Total(props) {
    return (
        <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
                {props.uscurrencyformat.format(props.total)}
            </div>
        </div>
    )
}