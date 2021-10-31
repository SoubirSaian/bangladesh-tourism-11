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
        axios.post('https://macabre-nightmare-78794.herokuapp.com/myOrder',data)
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
        <div className="row my-5">

            <div className="col-12 col-md-9 col-lg-9 place-details">
                <h2 className="text-primary">{name}</h2>
                <h5 className="text-success">{location}</h5>
                <img src={img} alt="" />
                <p className="p-5">{description}</p>
                <h5>Highlights: <span className="text-danger">{highlights}</span></h5>
            </div>

            <div className="col-12 col-md-3 col-lg-3 add-info">
                <h3 className="text-success">Add information</h3>
                <form onSubmit={handlePlaceOrder}>

                    <input type="text" ref={nameRef} placeholder="enter your name"/>
                    <br />
                    <input type="text" ref={addressRef} placeholder="enter address" />
                    <br />
                    <input className="btn btn-outline-warning" type="submit" value="Place Your Order" />

                </form>  

            </div>

        </div>
    );
};

export default PlaceDetails;