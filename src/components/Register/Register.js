import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';
     
        // user register component 
const Register = () => {

    const {error,emailPasswordSignInHandler,inputEmailHandler,inputPasswordHandler} = useAuth();
    // console.log(error);

    return (
        <div className="register-page">

            <h2 className="text-center">complete registration for better experience</h2>

            <form onSubmit={emailPasswordSignInHandler}>

                <input type="email" name="email" onBlur={inputEmailHandler} placeholder="enter your email"/>
                <br />
                <input type="password" name="password" onBlur={inputPasswordHandler} placeholder="enter your password"/>
                <br />
                <input type="submit" value="Register" />

                <span className="text-danger">{error}</span>
            </form>
            
            <h6 className="text-center">If you already registered, go to <Link to="/login">Log In</Link> page</h6>

        </div>
    );
};

export default Register;