  
// import React from "react";
// import slugify from "slugify";

// export default function Features(props) {
//   const { currencyFormat, selected } = props;
//   const features = Object.keys(props.features).map((feature, idx) => {
//     const featureHash = feature + "-" + idx;
//     const options = props.features[feature].map((item) => {
//       const itemHash = slugify(JSON.stringify(item));
//       return (
//         <div key={itemHash} className="feature__item">
//           <input
//             type="radio"
//             id={itemHash}
//             className="feature__option"
//             name={slugify(feature)}
//             checked={item.name === selected[feature].name}
//             onChange={(e) => props.updateFeature(feature, item)}
//           />
//           <label htmlFor={itemHash} className="feature__label">
//             {item.name} ({currencyFormat.format(item.cost)})
//           </label>
//         </div>
//       );
//     });

//     return (
//       <fieldset className="feature" key={featureHash}>
//         <legend className="feature__name">
//           <h3>{feature}</h3>
//         </legend>
//         {options}
//       </fieldset>
//     );
//   });

//   return features;
// }


import React from 'react';
import Option from './Option';
import Feature from './Feature';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

//Needs: this.state.selected[feature].name, this.updateFeature(feature, item)
function Features(props) {
    const features = Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));

          return (
              <Option feature={feature} itemHash={itemHash} item={item} name={props.selected[feature].name} updateFeature={props.updateFeature} uscurrencyformat={props.uscurrencyformat} />
          );
        });
  
        return (
          <Feature featureHash={featureHash} feature={feature} options={options}/>
        );
    });
    console.log("Coming from Features Component", props.features)
    return (
        <>
            {features}
        </>
    );
}

export default Features;