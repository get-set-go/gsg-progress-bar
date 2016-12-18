import '../node_modules/gsg-common-style/less/progress-bar/index.less';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class GSGProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let _bClass = {
      'progress-bar': true
    };

    _bClass = objectAssign(_bClass, {
      [`progress-bar-${this.props.bStyle}`]: true
    });

    if (this.props.isStriped) {
      _bClass = objectAssign(_bClass, {
        'progress-bar-striped': true
      });
    }

    if (this.props.isActive) {
      _bClass = objectAssign(_bClass, {
        'active': true
      });
    }

    _bClass = classNames(_bClass);

    let _bProgress = {
      'width': `${this.props.bProgress}%`
    };

    return(
      <div className="progress">
        <div className={_bClass} style={_bProgress}>
          <span className="sr-only">{_bProgress.width} Complete (success)</span>
        </div>
      </div>
    );
  }
};

GSGProgressBar.propTypes = {
  bStyle: PropTypes.string,
  isStriped: PropTypes.bool,
  isActive: PropTypes.bool
};

GSGProgressBar.defaultProps = {
  bStyle: 'primary',
  isStriped: false,
  isActive: false
};
