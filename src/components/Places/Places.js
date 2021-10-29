import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TouristSpot from '../TouristSpot/TouristSpot';
import './Places.css';

    // display all tourist places component 
    
const Places = () => {

    const [tourPlaces,setTourPlaces] = useState([]);

    useEffect(()=>{
        fetch('./tourSpot.json')
            .then(res => res.json())
            .then (data => setTourPlaces(data));
    },[]);

    return (
        <div className="container my-5">
            <h3 className="text-center mb-4">famous destination</h3>
            <div className="row">
                {
                    tourPlaces.map(place => <TouristSpot key={place.id} place={place}></TouristSpot>)
                }
            </div>
        </div>
    );
};

export default Places;