import initializeAuthentication from "../firebase/firebase.init";
import {getAuth,GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initializeAuthentication();

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

    //    useFirebase hook 

const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [error,setError] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [isLoading,setIsLoading] = useState(true);

         // google sign in handling 
    const signInUsingGoogle = () =>{
        setIsLoading(true);
       return signInWithPopup(auth,googleProvider)
             
            .catch(error =>{
                setError(error.message);
            })
            .finally(()=>{
                setIsLoading(false);
            });
    }

        // log out handling 
    const logOut = () =>{

        setIsLoading(true);

        signOut(auth)
            .then(()=>{
                setUser({});
            })
            .finally(()=>{
                setIsLoading(false);
            });
    }

    // setting auth observer 
    useEffect(()=>{
        onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        })
    },[]);

            // user password handler 
    const inputPasswordHandler = (event) =>{
         console.log(event.target.value);
        setPassword(event.target.value);
         
    };
                //  user email handler 
    const inputEmailHandler =(event)=>{
         console.log()
        setEmail(event.target.value);
         
    };

        // log in using email and password 
    const logInUsingEmailAndPassword = (e) =>{
        e.preventDefault();
            
        setIsLoading(true);
        
        signInWithEmailAndPassword(auth,email,password)
            .then(result => {
                setUser(result.user);
                return true;
            })
            .catch(error => {
                setError(error.messege);
            })
            .finally(()=>{
                  setIsLoading(false);
             });
     }
                // create user using email and password
    const emailPasswordSignInHandler = (event) =>{
        event.preventDefault();

        // password validation 
        if(password.length < 6){
            setError('password must bt at least 6 character');
            return;
        } 

        createUserWithEmailAndPassword(auth,email,password)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .catch(error =>{
                setError(error.message);
            });
    }

    return {
        user,
        error,
        isLoading,
        logOut,
        signInUsingGoogle,
        inputPasswordHandler,
        inputEmailHandler,
        logInUsingEmailAndPassword,
        emailPasswordSignInHandler
    };
}

export default useFirebase;