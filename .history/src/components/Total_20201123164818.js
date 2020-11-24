import React from 'react';
import USCurrencyFormat from '../currency'

function Total (props) {
      
      let total = Object.keys(props.theState).reduce(
        (acc, curr) => acc + props.theState[curr].cost,
        0
      );      
      return (
        <>
        {USCurrencyFormat.format(total)}
        </>
      )
}



export default Total