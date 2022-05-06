import React from 'react';
import useInventories from '../hooks/useInventories';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const [inventories, setInventories] = useInventories(7)
    return (
        <div>
            {
                inventories.map(inventory => <ManageInventory key={inventory.id}  inventory={inventory} ></ManageInventory>)
            }
        </div>
    );
};

export default ManageInventories;