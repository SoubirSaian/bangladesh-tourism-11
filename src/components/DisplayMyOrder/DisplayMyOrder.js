import React from 'react';
import './DisplayMyOrder.css';
     
    //   display myorder component 
const DisplayMyOrder = (props) => {
    // console.log(props.myOrder);
    const {address,name,userEmail,userName} = props.myOrder;
    // const {button} = props.children;
     

    return (
        <div className="display-my-order">
            
            <h4 className="text-primary">{name}</h4>
            <h5 className="text-success">{userName}</h5>
            <h6 className="text-danger">{userEmail}</h6>
            <h6>{address}</h6>
            {props.children}
        
        </div>
    );
};

export default DisplayMyOrder;