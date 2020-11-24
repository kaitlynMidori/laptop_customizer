import React from 'react';
import USCurrencyFormat from '../currency'

//Cart Component
function MainSummary (props) {

  
    let summary = Object.keys(props.theState).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = props.theState[feature];

      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value" >{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );  
    });
     
    return (
      <>
      {summary}
      </>
    )
  }

export default MainSummary