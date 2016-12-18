import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';

import ProgressBar from '../dist/index.min';

class Page extends React.Component {
  render() {
    return (
      <div className="progressbar-eg-container">
        <h1>Get-Set-Go Progress-Bar Component</h1>

        <p className="progressbar-eg-group">
          <h4>Progress-Bar Styles with text</h4>

          <ProgressBar bProgress="10">10% scanning</ProgressBar>

          <ProgressBar bStyle="success" bProgress="30">30% scanning</ProgressBar>

          <ProgressBar bStyle="info" bProgress="50">50% scanning</ProgressBar>

          <ProgressBar bStyle="warning" bProgress="70">70% scanning</ProgressBar>

          <ProgressBar bStyle="danger" bProgress="90">90% scanning</ProgressBar>
        </p>

        <p className="progressbar-eg-group">
          <h4>Progress-Bar Striped</h4>

          <ProgressBar isStriped="true" bProgress="40"></ProgressBar>
        </p>

        <p className="progressbar-eg-group">
          <h4>Progress-Bar State</h4>

          <ProgressBar isStriped="true" isActive="true" bProgress="40"></ProgressBar>
        </p>

      </div>
    );
  }
};

ReactDOM.render(
  <Page />,
  document.getElementById('container')
);
