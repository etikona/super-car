import React from 'react';
import { Link } from 'react-router-dom';
import useInventories from '../hooks/useInventories';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const [inventories, setInventories] = useInventories(6)
    return (
        <div>
            {
                inventories.map(inventory => <ManageInventory key={inventory.id}  inventory={inventory} ></ManageInventory>)
            }
            <button><Link to="/AddnewItem">Add item</Link></button>
        </div>
    );
};

export default ManageInventories;