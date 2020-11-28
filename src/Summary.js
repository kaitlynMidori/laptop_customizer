import React from 'react';
import FeatureSummary from './FeatureSummary';

function Summary(props) {
    const summary = Object.keys(props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.selected[feature];
        //Component
        return (
          // FeatureSummary Component
          // needs: featureHash, feature, selectedOption, uscurrencyformat
          <FeatureSummary featurehash={featureHash} feature={feature} selectedOption={selectedOption} uscurrencyformat={props.uscurrencyformat} />
        ); 
    });

    return (   
        <>
            {summary}
        </>
    );
}

export default Summary;