import React from 'react';

class Entrance extends React.Component {
  render () {
    return (
      <form className="store-selector">
        <h3>Please Enter A Store</h3>
        <input type="text" placeholder="Store Name" required></input>
        <button type="submit">Goto Store -></button>
      </form>
    );
  }
}

export default Entrance;
