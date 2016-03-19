import React, {Component} from 'react';
import Button from 'components/shared/Button';
import BenefitCard from 'components/shared/BenefitCard';
import Header from 'components/shared/Header';
import ImageTrio from 'components/shared/ImageTrio';
import {home} from 'data';

const displayName = 'Home'; 
export default class Home extends Component {
  static displayName = displayName;

  render() {
    return (
      <main className={displayName}>
        <Header />
        <section className={`${displayName}-jumbotron`}>
          <h1 className={`${displayName}-jumbotron-title`}>{home.jumbotron.main}</h1>
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
      </main>
    );
  }

  _showEmailModal = () => {
    console.log('hit');
  }

}
