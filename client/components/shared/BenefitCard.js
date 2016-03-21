import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import pureRender from 'pure-render-decorator';

const displayName = 'BenefitCard';

@pureRender
export default class BenefitCard extends Component {
  static displayName = displayName;
  
  static propTypes = {
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };
  
  render() {
    const {description, className, image, title} = this.props;
    const classes = classNames({
      [className]: className,
      [displayName]: true 
    });

    return (
      <section className={classes}>
        <aside className={`${displayName}-image-section`}>
          <img className={`${displayName}-image-section-image`} src={image} />
        </aside>
        <aside className={`${displayName}-info-section`}>
          <h1 className={`${displayName}-info-section-title`}>{title}</h1>
          <p className={`${displayName}-info-section-description`}>{description}</p>
        </aside>
      </section>
    );
  }
}
