import React from 'react';
import CurrencyFormat from './CurrencyFormat';
import slugify from 'slugify';

function FeatureItem(props) {
    const { itemHash, item, feature, selectedState, updateFeature } = props;
    return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            checked={item.name === selectedState.name}
            onChange={e => updateFeature(feature, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} <CurrencyFormat amount={item.cost} />
          </label>
        </div>
    )
}

export default FeatureItem;