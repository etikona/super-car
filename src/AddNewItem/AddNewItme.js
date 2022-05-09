import React from 'react';

const AddNewItme = () => {
    return (
        <div>
            <form className='px-2 py-5 container ml- border-2 border-cyan-800'>
      
        <input type="text" name="name" placeholder='name' id="" />
        <br />
        <input type="text" name="description" placeholder='description' id="" />
        <br />
        <input type="text" name="quantity" placeholder='quantity' id="" />
        <br />
        <input type="text" name="price" placeholder='price' id="" />
        <br />
        <input type="submit" value="Add Items" />
            </form>
        </div>
    );
};

export default AddNewItme;