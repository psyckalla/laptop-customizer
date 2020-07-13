import React from 'react';
import slugify from 'slugify';
import CurrencyFormat from './CurrencyFormat';

function RenderFeatureOptions(props) {
    const { feature, idx, individualFeature, updateFeature, selectedState } = props;
    const featureHash = feature + '-' + idx;
    const options = individualFeature.map(item => {
      const itemHash = slugify(JSON.stringify(item));
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
      );
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  };

export default RenderFeatureOptions;