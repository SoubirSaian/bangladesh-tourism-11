import React from 'react';
import './DisplayAllOrder.css';

        // display all manage order components 
const DisplayAllOrder = (props) => {
    // console.log(props.allOrder);
    const {address,name,userEmail,userName} = props.allOrder;
    return (
        <div className="manage-my-order">
             <h4 className="text-primary">{name}</h4>
            <h5 className="text-success">{userName}</h5>
            <h6 className="text-danger">{userEmail}</h6>
            <h6>{address}</h6>
            {props.children}
        </div>
    );
};

export default DisplayAllOrder;