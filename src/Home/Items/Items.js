import React from 'react';

const Items = (props) => {
  const {img, name, price} = props.inventory;
    return (
        <div className='container'>
           <img src={img} alt="" />
   <h2>{name}</h2>
   <h4>Price:{price}</h4>
        </div>
    );
};

export default Items;