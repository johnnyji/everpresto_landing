import React, {Component} from 'react';
import pureRender from 'pure-render-decorator';

const displayName = 'Header';

@pureRender
export default class Header extends Component {
  static displayName = displayName;

  render() {
    return (
      <header className={displayName}>
        <h1 className={`${displayName}-logo`}>everpresto!</h1>
      </header>
    );
  }
}
