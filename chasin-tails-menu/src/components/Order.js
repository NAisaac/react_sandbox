import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  renderOrder = (key) => {
    const dish = this.props.dishes[key];
    const count = this.props.orders[key];
    const isAvailable = dish && dish.status;
    if (isAvailable) {
      return (
        <li key={key}>
          {count} lbs of {dish.name} : {formatPrice(count * dish.price)}
        </li>
      );
    }
    return <li key={key}>Sorry {dish ? dish.name : 'this dish'} is no longer available</li>
  }

  render () {
    const orderIds = Object.keys(this.props.orders);
    const total = orderIds.reduce((prev, key) => {
      const dish = this.props.dishes[key];
      const count = this.props.orders[key];
      const isAvailable = dish && dish.status;
      if(isAvailable) {
        return prev + count * dish.price;
      }
      return prev;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">
          {orderIds.map(this.renderOrder)}
        </ul>
        <div className="total">
        Total: 
        <strong>{formatPrice(total)}</strong>
        </div>

      </div>
    );
  }
}

export default Order;
