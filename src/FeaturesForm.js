import React from 'react';
import Features from './Features';

function FeaturesForm(props) {
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {/*  Needs: this.state.selected[feature].name, this.updateFeature(feature, item) */}
            {/* {features} */}
            <Features selected={props.selected} updateFeature={props.updateFeature} features={props.features} uscurrencyformat={props.uscurrencyformat}/>
        </form>
    );
}

export default FeaturesForm;