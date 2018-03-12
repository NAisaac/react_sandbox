import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Dish from './Dish';
import sampleDishes from '../sample-dishes';
import base from '../base';
import shortid from 'shortid';


class App extends React.Component {
  state = {
    dishes: {},
    orders: {}
  };

  // storeId is passed into App component from the router as props
  storeId = this.props.match.params.storeId;

  // when component mounts
  componentDidMount() {  
    // reinstate state.orders from localStorage
    const localStorageRef = localStorage.getItem(this.storeId);
    if(localStorageRef) {
      this.setState({ orders: JSON.parse(localStorageRef) });
    }

    // sync database with store's state.dishes and start listening for changes
    this.ref = base.syncState(`${this.storeId}/dishes`, {
      context: this,
      state: 'dishes'
    });
  }

  // when component updates i.e. state updates
  componentDidUpdate(prevProps, prevState) {
    // update local storage with state.orders 
    localStorage.setItem(this.storeId, JSON.stringify(this.state.orders));
  }

  // when component unmounts, stop listening to changes to clean up memory and prevent memory leak
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addDish = (dish) => {
    console.log('Add Dish to state');
    // 1. copy existing state because reaching into state to modify directly may cause mutation 
    // i.e. performance, out-of-order update issues
    const dishes = { ...this.state.dishes };
    // 2. add new dish into dishes
    dishes[`dish-${shortid.generate()}`] = dish;
    // 3. update state using setState() api
    // ES6 shortcut if key and value are the same i.e. this.setState({ dishes: dishes });
    this.setState({ dishes });
  };

  loadSamples = () => {
    this.setState({ dishes: sampleDishes });
  };

  addOrder = (key) => {
    // 1. copy existing state
    const orders = { ...this.state.orders };
    // 2. add new order into orders
    orders[key] = orders[key] + 1 || 1;
    // 3. update state
    this.setState({ orders });
  }


  render () {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Hot & Fresh" />
          <ul className="fishes">
            {Object.keys(this.state.dishes).map(key => 
              <Dish 
              key={key}
              dishKey={key}
              info={this.state.dishes[key]} 
              addOrder={this.addOrder} 
              />
            )}
          </ul>
        </div>
        <Order dishes={this.state.dishes} orders={this.state.orders} />
        <Inventory 
        addDish={this.addDish} 
        loadSamples={this.loadSamples}
        />
      </div>
    );
  }
}

export default App;
