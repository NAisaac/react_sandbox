import React from 'react';
import { getFunName } from '../helpers';

class Entrance extends React.Component {
  render () {
    return (
      <form className="store-selector">
        <h3>Please Enter A Store</h3>
        <input required type="text" placeholder="Store Name" defaultValue={getFunName()}></input>
        <button type="submit">Goto Store -></button>
      </form>
    );
  }
}

export default Entrance;
