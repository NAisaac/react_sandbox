import React from 'react';
import { getFunName } from '../helpers';

class Entrance extends React.Component {
  state = {
    store: ''
  };

  enterStore = (e) => {
    // prevent default behavior of input form submit action, which causes page refresh
    e.preventDefault();
    let storeId = this.state.store;
    console.log(`Going to store: ${storeId}!`);
    // pushState: method from Router that changes route without a page reload, so no memory lost in any page
    this.props.history.push(`/store/${storeId}`);
  };

  handleChange = (e) => {
    // controlled component: state is the single source of truth
    this.setState({ store: e.target.value });
  };

  render () {
    return (
      <form className="store-selector" onSubmit={this.enterStore}>
        <h3>Please Enter Store Name</h3>
        <input 
        required 
        type="text" 
        placeholder={getFunName()}
        value={this.state.store}
        onChange={this.handleChange}
        />
        <button type="submit">Goto Store -></button>
      </form>
    );
  }

}

export default Entrance;
