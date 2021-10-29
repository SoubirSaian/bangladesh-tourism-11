import React from 'react';
import { useParams } from 'react-router';
import './PlaceOrder.css';

    //   placeorder page component 
    
const PlaceOrder = () => {
    const {placeId} = useParams();

    return (
        <div>
            <h3>id : {placeId}</h3>
            <h2>placeorder page</h2>
        </div>
    );
};

export default PlaceOrder;