import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import ProgressBar from '../src';

describe('<ProgressBar /> component', function() {

  it('should progressbar exist', function() {
    let _instance = ReactTestUtils.renderIntoDocument(<ProgressBar />);
    expect(ReactTestUtils.isCompositeComponent(_instance)).toBeTruthy();
  });

});
