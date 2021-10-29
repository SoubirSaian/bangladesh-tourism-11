import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    //   using auth context 
    const {signInUsingGoogle} = useAuth();

    const passRef = useRef();
    const emailRef = useRef();

    // console.log(user);
    // get email and password from user 
    const handleLogIn = (event)=>{
        const password = passRef.current.value;
        const email = emailRef.current.value;

        console.log(password,email);
        
        emailRef.current.value = '';
        passRef.current.value = '';
        event.preventDefault();
    }

    return (
        <div className="login-page">
            <h2>Log In </h2>
            <form onSubmit={handleLogIn}>
                
                <input type="email" name="email" ref={emailRef} />
                <br />
                <input type="password" name="password" ref={passRef} />
                <br />
                <input type="submit" value="Log In" />
            </form>
            <button onClick={signInUsingGoogle}>Google Sign in</button>
            <h6>if you are a new user, go to register page <Link to="/register">Registeration page</Link></h6>
        </div>
    );
};

export default Login;