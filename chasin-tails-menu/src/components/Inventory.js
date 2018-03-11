import React from 'react';
import DishForm from './DishForm';

class Inventory extends React.Component {
  render () {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <DishForm addDish={this.props.addDish} />
        <button onClick={this.props.loadSamples}>Load Samples</button>
      </div>
    );
  }
}

export default Inventory;
