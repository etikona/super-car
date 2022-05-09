
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';



const Header = () => {
  const [user] = useAuthState(auth)
    return (
        <div className='bg-cyan-600'>
       <nav>
       <div className='flex space-x-4 justify-center'>
           <Link to="/">Home</Link>
       <Link to="/login">Login</Link>
       <Link to="/signin">Sign in</Link>
       <Link to="/blogs">Blogs</Link>
       {user ? (
                    <button onClick={() => signOut(auth)}> Logout</button>,
                    <button>Manage Items</button>,
                    <button>My Items</button>,
                    <button>New Items</button>
                ) :
                    <Link to="/login">Login</Link>
                }

                {user?.email}

       </div>
       </nav>
        </div>
    );
};

export default Header;