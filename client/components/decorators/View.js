import React, {Component} from 'react';

const displayName = 'View';

const View = (ComposedComponent) => (class extends Component {
  
  static displayName = displayName;
  
  render() {
    return (
      <main className={displayName}>
        <ComposedComponent className={`${displayName}-main`} />
        <footer className={`${displayName}-footer`}>
          &copy; <span className={`${displayName}-footer-logo`}>everpresto!</span> 2016 
        </footer> 
      </main>
    );
  }
  
});

export default View;
