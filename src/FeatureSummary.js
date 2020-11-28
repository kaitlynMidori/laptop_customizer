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