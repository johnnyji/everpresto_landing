import React, {Component} from 'react';

const displayName = 'View';

const View = (ComposedComponent) => (class View extends Component {
  
  render() {
    return (
      <main className={displayName}>
        <ComposedComponent className={`${displayName}-main`} />
        <footer className={`${displayName}-footer`}>
          &copy; <span className='logo-font'>everpresto!</span> 2016 
        </footer> 
      </main>
    );
  }
  
});

export default View;

