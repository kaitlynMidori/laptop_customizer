import React from 'react';
import slugify from 'slugify'

function Option(props) {
    return (
        <div key={props.itemHash} className="feature__item">
            <input
            type="radio"
            id={props.itemHash}
            className="feature__option"
            name={slugify(props.feature)}
            checked={props.item.name === props.name}
            onChange={() => props.updateFeature(props.feature, props.item)}
            />
            <label htmlFor={props.itemHash} className="feature__label">
            {props.item.name} ({props.uscurrencyformat.format(props.item.cost)})
            </label>
        </div>
    )
}

export default Option;