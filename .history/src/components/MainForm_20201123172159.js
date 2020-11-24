import React from 'react';
import FEATURES from '../index'
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
