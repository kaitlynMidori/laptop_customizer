// import React from "react";

// export default function CartItem(props) {
//   const { currencyFormat, feature, idx, selected } = props;
//   const featureHash = feature + "-" + idx;
//   const selectedOption = selected[feature];

//   return (
//     <div className="summary__option" key={featureHash}>
//       <div className="summary__option__label">{feature} </div>
//       <div className="summary__option__value">{selectedOption.name}</div>
//       <div className="summary__option__cost">
//         {currencyFormat.format(selectedOption.cost)}
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import FeatureSummary from './FeatureSummary';

// function Summary(props) {
//     const summary = Object.keys(props.selected).map((feature, idx) => {
//         const featureHash = feature + '-' + idx;
//         const selectedOption = props.selected[feature];
//         //Component
//         return (
//           // FeatureSummary Component
//           // needs: featureHash, feature, selectedOption, uscurrencyformat
//           <FeatureSummary featurehash={featureHash} feature={feature} selectedOption={selectedOption} uscurrencyformat={props.uscurrencyformat} />
//         ); 
//     });

//     return (   
//         <>
//             {summary}
//         </>
//     );
// }

// export default Summary;