import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Dish from './Dish';
import sampleDishes from '../sample-dishes';


class App extends React.Component {
  state = {
    dishes: {},
    order: {}
  };

  addDish = (dish) => {
    console.log('Add Dish to state');
    // 1. copy existing state because reaching into state to modify directly may cause mutation 
    // i.e. performance, out-of-order update issues
    const dishes = { ...this.state.dishes };
    // 2. add new dish into dishes
    dishes[`dish${Date.now()}`] = dish;
    // 3. update state using setState() api
    // ES6 shortcut if key and value are the same i.e. this.setState({ dishes: dishes });
    this.setState({ dishes });
  };

  loadSamples = () => {
    this.setState({ dishes: sampleDishes });
  };


  render () {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Hot & Fresh" />
          <ul className="fishes">
            {Object.keys(this.state.dishes).map(key => <Dish key={key} info={this.state.dishes[key]} />)}
          </ul>
        </div>
        <Order />
        <Inventory 
        addDish={this.addDish} 
        loadSamples={this.loadSamples}
        />
      </div>
    );
  }
}

export default App;
