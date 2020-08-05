import React from 'react';
import CurrencyFormat from './CurrencyFormat';

function SummaryTotal (props) {
    const { total } = props;

    return (
        <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
              <CurrencyFormat amount={total} />
              </div>
        </div>
    )
}

export default SummaryTotal;