import React, { Component } from 'react';
import RenderFeatureOptions from './RenderFeatureOptions';
import RenderSummaryCart from './RenderSummaryCart';
import RenderAppSections from './RenderAppSections';

import './App.css';

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      return <RenderFeatureOptions 
      feature={feature} 
      idx={idx} 
      individualFeature={this.props.features[feature]}
      updateFeature={this.updateFeature} 
      selectedState={this.state.selected[feature]}/>});

      const summary = Object.keys(this.state.selected).map((feature, idx) => {
        return <RenderSummaryCart 
        selectedState={this.state.selected} 
        feature={feature} idx={idx} 
        selectedStateFeature={this.state.selected[feature]}/>});

    return (
      <RenderAppSections selectedState={this.state.selected} features={features} summary={summary} />
    );
  }
}

export default App;
