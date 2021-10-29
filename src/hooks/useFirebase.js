import initializeAuthentication from "../firebase/firebase.init";
import {getAuth,GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initializeAuthentication();

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

    //    useFirebase hook 

const useFirebase = () =>{
    const [user,setUser] = useState({})
    const [error,setError] = useState('');

         // google sign in handling 
    const signInUsingGoogle = () =>{
        signInWithPopup(auth,googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error =>{
                setError(error.message);
            })
    }

        // log out handling 
    const logOut = () =>{
        signOut(auth)
            .then(()=>{
                setUser({});
            });
    }

    // setting user observer 
    useEffect(()=>{
        onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(user);
            }
        })
    },[]);

    return {
        user,
        error,
        logOut,
        signInUsingGoogle
    };
}

export default useFirebase;