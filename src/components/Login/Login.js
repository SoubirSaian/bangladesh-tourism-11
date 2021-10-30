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

     const handleGoogleLogIn = () => {
        signInUsingGoogle()
        .then((result) => {
            history.push(redirect_uri);
        });
    }

    const handleEmailPasswordLogin = (e) => {
         
        logInUsingEmailAndPassword(e)
       
             history.push(redirect_uri);
       
    }

    return (
        <div className="login-page">
            <h2 className="text-center">Log In </h2>
            <form onSubmit={handleEmailPasswordLogin}>
                
                <input type="email" name="email" onBlur={inputEmailHandler} />
                <br />
                <input type="password" name="password" onBlur={inputPasswordHandler} />
                <br />
                <input type="submit" value="Log In" />
            </form>

            <button className="btn btn-outline-danger" onClick={handleGoogleLogIn}>Google Sign in</button>

            <h6 className="text-center">if you are a new user, go to register page <Link to="/register">Registeration page</Link></h6>
        </div>
    );
};

export default Login;