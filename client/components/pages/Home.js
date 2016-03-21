import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import Button from 'components/shared/Button';
import BenefitCard from 'components/shared/BenefitCard';
import Header from 'components/shared/Header';
import ImageTrio from 'components/shared/ImageTrio';
import PriceCard from 'components/shared/PriceCard';
import View from 'components/decorators/View';

import {home} from 'data';

const displayName = 'Home'; 

@View
export default class Home extends Component {
  static displayName = displayName;

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    const classes = classNames({
      [this.props.className]: this.props.className,
      [displayName]: true
    });

    return (
      <div className={classes}>
        <Header />
        
        <section className={`${displayName}-jumbotron`}>
          <h1 className={`${displayName}-jumbotron-title`}>{home.jumbotron.div}</h1>
          <h2 className={`${displayName}-jumbotron-title`}>{home.jumbotron.sub}</h2>
          <Button
            className={`${displayName}-jumbotron-sign-up-button`}
            onClick={this._showEmailModal}>
            Start for free!
          </Button>
          <ImageTrio
            className={`${displayName}-jumbotron-image-trio`}
            left={home.jumbotron.imageTrio.left}
            center={home.jumbotron.imageTrio.center}
            right={home.jumbotron.imageTrio.right} />
        </section>

        <section className={`${displayName}-section-light ${displayName}-section`}>
          <h1>{home.benefits.title}</h1>
          <div className={`${displayName}-section-benefit-cards`}>
            {home.benefits.segments.map((segment, i) => (
              <BenefitCard
                className={`${displayName}-section-benefit-cards-card`}
                key={i}
                title={segment.title}
                description={segment.description}
                image={segment.image} />
            ))} 
          </div>
        </section>

        <section className={`${displayName}-section-light ${displayName}-section`}>
          <div className={`${displayName}-section-price-cards`}>
            {this._renderPrices()}
          </div>
        </section>
        
      </div>
    );
  }

  _renderPrices = () => {
    return home.prices.map((price, i) => (
      <PriceCard
        className={`${displayName}-section-prices-cards-card`}
        key={i}
        features={price.features}
        title={price.title} /> 
    )); 
  };

  _showEmailModal = () => {
    console.log('hit');
  };

}
