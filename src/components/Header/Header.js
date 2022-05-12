import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import {signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignout = () => {
        signOut(auth)
    };
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {user?
                    <button onClick={handleSignout}>Sign out</button>
                    :<Link to={'/login'}>Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;