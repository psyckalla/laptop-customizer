import React from 'react';
import CurrencyFormat from './CurrencyFormat';

function RenderAppSections(props) {
    const { features, summary, total } = props;
    return (
        <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
              <CurrencyFormat amount={total} />
              </div>
            </div>
          </section>
        </main>
      </div>
    )
}

export default RenderAppSections;