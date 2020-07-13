import React from 'react';
import CurrencyFormat from './CurrencyFormat';

function RenderSummaryCart(props) {
    const { feature, idx, selectedStateFeature } = props;
        const featureHash = feature + '-' + idx;
        const selectedOption = selectedStateFeature;
    
        return (
            <div className="summary__option" key={featureHash}>
              <div className="summary__option__label">{feature} </div>
              <div className="summary__option__value">{selectedOption.name}</div>
              <div className="summary__option__cost">
              <CurrencyFormat amount={selectedOption.cost} />
              </div>
            </div>
          );
}

export default RenderSummaryCart;