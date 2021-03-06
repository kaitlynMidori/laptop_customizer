import React from 'react';
import Specs from './components/Specs';
import Option from './Option'

export default function MainForm(props) {
  const { currencyFormat } = props;
  return (
    <div>
      <Features
        {...props}
        currencyFormat={currencyFormat}
        updateFeature={props.updateFeature}
      />
    </div>
  );
}
