import React from 'react';
import { formatPrice } from '../helpers';

class Dish extends React.Component {
    handleClick = () => {
        console.log('Add to Order!');
        this.props.addOrder(this.props.dishKey);
    };

    render() { 
        const { name, price, status, desc, image } = this.props.info;
        const isAvailable = status;
        return (
            <li className="menu-fish">
                <img src={image} alt={name}/>
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={this.handleClick}>
                    { isAvailable ? 'Add to Order' : 'Sold Out' }
                </button>
            </li>
        );
    }
}
 
export default Dish;