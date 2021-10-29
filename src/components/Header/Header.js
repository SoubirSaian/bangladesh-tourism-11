import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
 
    //   header section 

const Header = () => {
        //  using auth context 
    const {user,logOut} = useAuth();
    console.log(user);
    
            // display only name paart of an emmail 
    const email = user.email;
    const emailName = email?.substring(0, email?.lastIndexOf("@"));

    return (
        <div className="navigation-bar">
            <div>
                <h2><i><span className="text-success">Bangladesh</span> <span className="text-danger">Travel</span></i></h2>
            </div>
            
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/addplace">Add Place</Link></li>
                <li><Link to="register">Register</Link></li>
                <span>{emailName}</span>

                {user?.email ?  <button onClick={logOut}>Log Out</button> : <li><Link to="/login">Log In</Link></li>}
            </ul>
        </div>
    );
};

export default Header;