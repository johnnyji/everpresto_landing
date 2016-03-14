import React, {Component} from 'react';
import Header from 'components/shared/Header';
import {home} from 'data';

const displayName = 'Home';

export default class Home extends Component {

  static displayName = displayName;

  render() {
    return (
      <main className={displayName}>
        <Header />
        <h1>{home.intro.main}</h1>
        <h2>{home.intro.sub}</h2>

      </main>
    );
  }
}
