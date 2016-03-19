import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import pureRender from 'pure-render-decorator';

const displayName = 'Button';

@pureRender
export default class Button extends Component {
  static displayName = displayName;
  
  static propTypes = { 
    onClick: PropTypes.func
  };

  render() {
    const {className, children, onClick} = this.props;
    const classes = classNames({
      [className]: className,
      [displayName]: true
    }); 
    
    return (
      <button className={classes} onClick={onClick}>{children}</button>
    );
  }
}
