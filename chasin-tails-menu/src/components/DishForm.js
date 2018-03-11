import React from 'react';

class DishForm extends React.Component {
  // since this form component does not and should not need a state, we are using ref 
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createDish = (e) => {
    e.preventDefault();
    // create a dish object to lift up
    const dish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: JSON.parse(this.statusRef.value.value),
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    };
    // lift up to parents
    this.props.addDish(dish);
    // refresh the form; currentTarget is the form
    e.currentTarget.reset();
  };

  render () {
    return (
        <form className="fish-edit" onSubmit={this.createDish}>
          <input name="name" type="text" placeholder="Name" ref={this.nameRef} />
          <input name="price" type="number" placeholder="Price" ref={this.priceRef} defaultValue={0} />
          <select name="status" ref={this.statusRef}>
            <option value={true}>A Few Left</option>
            <option value={false}>Sold Out</option>
          </select>
          <textarea name="desc" placeholder="Description" ref={this.descRef}></textarea>
          <input name="image" type="text" placeholder="Image" ref={this.imageRef} />
          <button type="submit">+ Add Dish</button>
        </form>
    );
  }
}

export default DishForm;
