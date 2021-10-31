import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    //   using auth context 
    const {signInUsingGoogle,inputPasswordHandler,inputEmailHandler,logInUsingEmailAndPassword} = useAuth();

     const location = useLocation();
     const history = useHistory();
     const redirect_uri = location.state?.from || '/home';
    
        // google login redirect to initial page 
     const handleGoogleLogIn = () => {
        signInUsingGoogle()
        .then((result) => {
            history.push(redirect_uri);
        });
    }
            // email password login to initial page 
    const handleEmailPasswordLogin = (e) => {
         
        logInUsingEmailAndPassword(e)
       
             history.push(redirect_uri);
       
    }

    return (
        <div className="login-page">
            <h2 className="text-center mb-4">complete <span className="text-warning">Log in</span> </h2>
            <form onSubmit={handleEmailPasswordLogin}>
                
                <input type="email" name="email" onBlur={inputEmailHandler} placeholder="enter email"/>
                <br />
                <input type="password" name="password" onBlur={inputPasswordHandler} placeholder="enter password"/>
                <br />
                <input type="submit" className="btn btn-outline-warning p-2" value="Log In" />
            </form>

            <button className="btn btn-outline-danger fw-5 p-2" onClick={handleGoogleLogIn}>Google Sign in</button>

            <h6 className="text-center">if you are a new user, go to register page <Link to="/register">Registeration page</Link></h6>
        </div>
    );
};

export default Login;