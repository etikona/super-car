import React from 'react';
import { Link } from 'react-router-dom';

const Items = (props) => {
  const {img, name, price, quantity} = props.inventory;
    return (
        <div className='container'>
           <img src={img} alt="" />
   <h2>{name}</h2>
   <h4>Price:{price}</h4>
   <h6>Quantity: {quantity}</h6>
   <button><Link to="/inventory">Update</Link></button>
        </div>
    );
};

export default Items;