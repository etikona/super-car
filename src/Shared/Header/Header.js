import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='bg-cyan-600'>
       <nav>
       <div className='flex space-x-4 justify-center'>
       <Link to="/login">Login</Link>
       <Link to="/signin">Sign in</Link>
       <Link to="/blogs">Blogs</Link>
       </div>
       </nav>
        </div>
    );
};

export default Header;