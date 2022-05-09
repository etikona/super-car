

import React, { useEffect } from 'react';
import useInventories from '../hooks/useInventories';

const Inventory = () => {
    const [inventories, setInventories] = useInventories([]);

    useEffect( () => {
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then( data => setInventories(data))
       
    }, [])
    const restokeItems = event => { 
        event.preventDefault();
        const quantity = event.target.quantity.value;

        fetch('http://localhost:5000/inventory', {
            method: 'POST',
            Headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(quantity)
        })
        .then(res => res.json())
        .then(data => {
            console.log('Success', data)
        })
      
    }
    const handleDelete = id => {
        const deleteInventory = window.confirm("Are you sure to delete an inventory??");
        if(deleteInventory){
            console.log('deleting with user id', id)
            const url = `http://localhost:5000/inventory${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
               if(data.deletedCount > 0){
                   const remaining = inventories.filter(inventory =>inventory._id !== id);
                   setInventories(remaining);
               }
            })
        }
    }


    return (
        <div>
            <h2>Inventories</h2>
            <h1>Inventory: {inventories.length}</h1>
         <ol>
             {
                 inventories.map(inventory => <li className='container ' key={inventory._id}>{inventory.name} : {inventory.quantity} : {inventory.description}
                 <button onClick={() => handleDelete(inventory._id)}>Delsivered❌</button>
                 <br />
                 <button>Restoke✔</button>
                 </li>)
             }
         </ol>
            <form className='bg-orange-400' onSubmit={restokeItems}> 
                <input className='bg-orange-200' type="number" name="quantity" placeholder='Quantity'  id="" />
               <br />
               <input type="submit" value="Restoke" />
            </form>
        </div>
    );
};

export default Inventory;