import React from 'react';
import DishForm from './DishForm';
import EditDishForm from './EditDishForm';

class Inventory extends React.Component {
  render () {
    return (
      <div className="inventory">
        <h2>Inventory</h2> 
        {Object.keys(this.props.dishes).map(key => 
          <EditDishForm 
          key={key} 
          dishKey={key}
          dish={this.props.dishes[key]} 
          updateDish={this.props.updateDish}
          />
        )}
        <DishForm addDish={this.props.addDish} />
        <button onClick={this.props.loadSamples}>Load Samples</button>
      </div>
    );
  }
}

export default Inventory;
