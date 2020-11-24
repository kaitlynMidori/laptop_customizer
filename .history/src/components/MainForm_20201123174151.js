import React from 'react';
import Specs from './Features';
import Features from './Features';

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
