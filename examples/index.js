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
          <h4>Progress-Bar Styles</h4>

          <ProgressBar bProgress="40"></ProgressBar>

          <ProgressBar bStyle="success" bProgress="40"></ProgressBar>

          <ProgressBar bStyle="info" bProgress="40"></ProgressBar>

          <ProgressBar bStyle="warning" bProgress="40"></ProgressBar>

          <ProgressBar bStyle="danger" bProgress="40"></ProgressBar>
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
