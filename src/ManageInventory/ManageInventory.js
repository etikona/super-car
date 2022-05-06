import React from 'react';

const ManageInventory = (props) => {
    const {img, name, description, price, quantity, suplierName} = props.inventory;
    return (
        <div className='container'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>price:{price}</p>
            <p>Description:<small>{description}</small></p>
            <h4>Quntity:{quantity}</h4>
            <h6>Suplier Name:{suplierName}</h6>
        </div>
    );
};

export default ManageInventory;