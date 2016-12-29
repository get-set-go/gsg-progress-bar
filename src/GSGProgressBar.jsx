import '../node_modules/gsg-common-style/less/progress-bar/index.less';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class GSGProgressBar extends React.Component {
  render() {
    let _bClass = {
      'progress-bar': true,
      [`progress-bar-${this.props.bStyle}`]: true
    };

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

    let _bAlignClass = {
      [`text-${this.props.bAlign}`]: true
    };

    _bAlignClass = classNames(_bAlignClass);

    return(
      <div>
        {
          this.props.isOutside &&
          <div className={_bAlignClass}>{this.props.children}</div>
        }
        <div className="progress">
          <div className={_bClass} style={_bProgress}>
            {!this.props.isOutside && this.props.children}
          </div>
        </div>
      </div>
    );
  }
};

GSGProgressBar.propTypes = {
  bStyle: PropTypes.string,
  isStriped: PropTypes.bool,
  isActive: PropTypes.bool,
  isOutside: PropTypes.bool,
  bAlign: PropTypes.string
};

GSGProgressBar.defaultProps = {
  bStyle: 'primary',
  isStriped: false,
  isActive: false,
  isOutside: false,
  bAlign: 'left'
};
