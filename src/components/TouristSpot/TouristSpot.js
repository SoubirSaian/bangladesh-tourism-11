import React from 'react';
import { Link } from 'react-router-dom';
import "./TouristSpot.css";


//    display individual tousist place component  
const TouristSpot = (props) => {
    // console.log(props.place);
    //   destructuring props 
    const {description,_id,img,location,name} = props.place;
    return (
        <div className="col-12 m-4 tourist-spot">
            <h3 className="text-center text-primary pt-3">{name}</h3>
            <div className="spot-detail">
                <div className="ps-5">
                    <img src={img} alt=""/>
                </div>
                <div className="p-5">
                    
                    <h5 className="text-success">{location}</h5>
                    <p>{description.slice(0,300)}</p>
                    <Link to={`/placeorder/${_id}`}> <button className="btn btn-outline-primary m-3">Book this packege</button></Link>
                    {/* <button className="btn btn-outline-success m-3">Details</button> */}
                </div>
            </div>
        </div>
    );
};

export default TouristSpot;