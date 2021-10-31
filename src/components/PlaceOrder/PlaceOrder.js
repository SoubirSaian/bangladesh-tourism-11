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
        fetch('https://macabre-nightmare-78794.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setPlaces(data));
    },[]);
    console.log(places);
    const oneplace = places.find(place => place.id === parseInt(placeId));
    // console.log(oneplace)

    return (
        <div>
            {
              oneplace &&  <PlaceDetails key={oneplace.id} place={oneplace} ></PlaceDetails>
            }
        </div>
    );
};

export default PlaceOrder;