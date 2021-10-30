import React from 'react';
import './DisplayAllOrder.css';

        // display all manage order components 
const DisplayAllOrder = (props) => {
    // console.log(props.allOrder);
    const {userName,name} = props.allOrder;
    return (
        <div>
            <h2>{userName}</h2>
            <h4>{name}</h4>
        </div>
    );
};

export default DisplayAllOrder;