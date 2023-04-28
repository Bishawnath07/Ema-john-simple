import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Header = () => {
    const {user , logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then(result =>{ })
        .catch(error => console.error(error));
    }

    return (
        <nav className='header'>
        <img src={logo} alt="" />    
       <div>
        <Link to="/">Shop</Link>
        <Link to="/order">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/sign-up">Sign Up</Link>
        {
        user && 
        <span className='text-white'>Wellcome {user.email} <button onClick={handleLogOut}>logout</button></span>
        }
       </div>

        </nav>
    );
};

export default Header;