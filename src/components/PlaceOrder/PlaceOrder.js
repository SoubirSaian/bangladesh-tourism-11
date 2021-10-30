import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import './PlaceOrder.css';

    //   placeorder page component 
    
const PlaceOrder = () => {
    //  used useParams for geeting id 
    const {placeId} = useParams();
    const [places,setPlaces] = useState([]);

    useEffect(()=>{
        fetch('/tourSpot.json')
            .then(res => res.json())
            .then(data => setPlaces(data));
    },[]);
    console.log(places);
    const oneplace = places.find(place => place.id === parseInt(placeId));
    // console.log(oneplace)

    return (
        <div>
            <h3>id : {placeId}</h3>
            <div>
                {
                  oneplace &&  <PlaceDetails key={oneplace.id} place={oneplace} ></PlaceDetails>
                }
            </div>
        </div>
    );
};

export default PlaceOrder;