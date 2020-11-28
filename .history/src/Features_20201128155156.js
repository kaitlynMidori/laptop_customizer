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