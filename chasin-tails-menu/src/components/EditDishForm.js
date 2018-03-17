import React from 'react';

class EditDishForm extends React.Component {
    handleChange = (e) => {
        // we know the name and value of the change
        console.log(e.currentTarget.name);
        console.log(e.currentTarget.value);
        // 1. make a copy of the dish
        const updatedDish = { ...this.props.dish };
        // 2. update the part that changed
        updatedDish[e.currentTarget.name] = e.currentTarget.value;
        // 3. lift up to State
        this.props.updateDish(this.props.dishKey, updatedDish);
    };

    render() { 
        const { name, price, status, desc } = this.props.dish;
        return (
            <div className="fish-edit">
                <input name="name" type="text" value={name} onChange={this.handleChange}/>
                <input name="price" type="number" value={price} onChange={this.handleChange}/>
                <select name="status" value={status} onChange={this.handleChange}>
                    <option value={true}>A Few Left</option>
                    <option value={false}>Sold Out</option>
                </select>
                <textarea name="desc" value={desc} onChange={this.handleChange} />
                <input name="image" type="text" placeholder="Image" onChange={this.handleChange} />
                <button onClick={() => this.props.deleteDish(this.props.dishKey)}>Remove Dish</button>
            </div> 
        );
    }
}
 
export default EditDishForm;