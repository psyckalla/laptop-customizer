import React from 'react';
import SummaryTotal from './SummaryTotal';

function MainSummary (props) {
    const { summary, total } = props;
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <SummaryTotal total={total} />
            
          </section>
    )
}

export default MainSummary;