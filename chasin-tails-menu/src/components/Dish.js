import React from 'react';
import { formatPrice } from '../helpers';

class Dish extends React.Component {
    render() { 
        const { name, price, status, desc, image } = this.props.info;
        return (
            <li className="menu-fish">
                <img src={image} alt={name}/>
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button>Add to Order</button>
            </li>
        );
    }
}
 
export default Dish;