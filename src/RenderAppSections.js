import React from 'react';
import MainSummary from './MainSummary.js';
import MainForm from './MainForm';

function RenderAppSections(props) {
    const { features, summary, selectedState} = props;

    const total = Object.keys(selectedState).reduce(
      (acc, curr) => acc + selectedState[curr].cost,
      0
    );
    return (
        <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <MainForm features={features} />
          <MainSummary summary={summary} total={total} />
        </main>
      </div>
    )
}

export default RenderAppSections;