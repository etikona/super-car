import React from 'react';
import { Link } from 'react-router-dom';
import useInventories from '../hooks/useInventories';
import Banner from '../pages/Banner/Banner';
import Items from './Items/Items';


const Home = () => {
    const [inventories, setInventories] = useInventories(3);
console.log(inventories);
    return (
        <div>
            <h3>Welcome to my Home</h3>
            <Banner></Banner>
            <div>
               <h2>Items are here</h2>
      {
          inventories.map(inventory => <Items key={inventory.id} inventory={inventory} ></Items>)
      }
      
            </div>
            <Link to="/manageInventories">Manage Inventories</Link>
        </div>
    );
};

export default Home;