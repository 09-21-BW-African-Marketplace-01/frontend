import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav>
            <h1>African Marketplace</h1>
            <Link to='profile/'>Profile</Link>
            <Link to='/login'>Login</Link>
            <Link to='/logout'>Logout</Link>
            
       
        </nav>
    )
}

export default NavBar
