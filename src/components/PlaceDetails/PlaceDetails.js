import axios from 'axios';
import React, { useRef } from 'react';
import useAuth from '../../hooks/useAuth';
import './PlaceDetails.css';

const PlaceDetails = (props) => {
    const {user} = useAuth();
    const userEmail = user.email;
     // console.log(props.place);
    const {description,highlights,img,location,name} = props.place;
    const nameRef = useRef();
    const addressRef = useRef();

    const handlePlaceOrder = (event) =>{
        
        const userName = nameRef.current.value;
        const address = addressRef.current.value;

        const data = {
            userEmail,userName,address,name,location
        }
        // console.log(data);
            //  user information sending to mongodb 
        axios.post('http://localhost:5000/myOrder',data)
            .then(res =>{
                // console.log(res);
                if(res.data.insertedId){
                    window.alert("order placed successfully");
                }
            })

        nameRef.current.value = '';
        addressRef.current.value = '';
        event.preventDefault();
    }

    return (
        <div className="row">

            <div className="col-12 col-md-9 col-lg-9">
                <h2>{name}</h2>
                <h4>{location}</h4>
                <img src={img} alt="" />
                <p>{description}</p>
                <h5>{highlights}</h5>
            </div>

            <div className="col-12 col-md-3 col-lg-3">
                <form onSubmit={handlePlaceOrder}>
                    <input type="text" ref={nameRef} placeholder="enter your name"/>
                    <br />
                    <input type="text" ref={addressRef} placeholder="enter address" />
                    <br />
                    <input type="submit" value="Place Your Order" />
                </form>  
            </div>

        </div>
    );
};

export default PlaceDetails;