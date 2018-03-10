import React from 'react';

class Header extends React.Component {
  render () {
    return (
      <React.Fragment>
        <header className="top">
          <h1>Menu
            <span className="ofThe">
              <span className="of">of</span>
              <span className="the">the</span>
            </span>
          Day
          </h1>
        </header>
        <h3 className="tagline">
          <span>Hot & Fresh</span>
        </h3>
      </React.Fragment>
    )
  }
}

export default Header;
