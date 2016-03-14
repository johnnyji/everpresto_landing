import React, {Component} from 'react';

const displayName = 'Home';

export default class Home extends Component {

  static displayName = displayName;

  render() {
    return (
      <main className={displayName}>
        <header>
          <h1 className={`${displayName}-logo`}>everpresto!</h1>
        </header>
        <h1></h1>
      </main>
    );
  }
}
