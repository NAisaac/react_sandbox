import React from 'react';

// Stateless component: component that only has props and render method
// There is no keyword 'this'
function Header (props) {
  return (
    <header className="top">
      <h1>Menu
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
      Day
      </h1>
      <h3 className="tagline">
        <span>{props.tagline}</span>
      </h3>
    </header>
  );
}

export default Header;
