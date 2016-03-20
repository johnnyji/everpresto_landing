import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import Button from './Button';

const displayName = 'PriceCard';

export default class PriceCard extends Component {
  static displayName = displayName; 

  static propTypes = {
    className: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired
  };

  render() {
    const {className, features, title} = this.props;
    const classes = classNames({
      [className]: className,
      [displayName]: true
    });

    return (
      <div className={classes}>
        <h1 className={`${displayName}-title`}>{title}</h1> 
        <ul className={`${displayName}-features`}>
          {features.map((feature, i) => (
            <li className={`${displayName}-features-feature`} key={i}>{feature}</li> 
          ))}
        </ul>
        <Button
          className={`${displayName}-features-join`}
          onClick={this.onSelect}>
          Join now
        </Button>
      </div>
    );
  }
}
