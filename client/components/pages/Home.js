import React, {Component} from 'react';
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
          <h1 className={`${displayName}-jumbotron-title`}>{home.intro.main}</h1>
          <h2 className={`${displayName}-jumbotron-title`}>{home.intro.sub}</h2>
          <ImageTrio
            center={home.intro.imageTrio.center}
            left={home.intro.imageTrio.left}
            right={home.intro.imageTrio.right} />
        </section>

      </main>
    );
  }
}
