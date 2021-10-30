import React from 'react';
import './DisplayMyOrder.css';
     
    //   display myorder component 
const DisplayMyOrder = (props) => {
    // console.log(props.children);
    const {userName,name} = props.myOrder;
    // const {button} = props.children;
     

    return (
        <div>
            <h2>{userName}</h2>
            <h4>{name}</h4>
            {props.children}
        </div>
    );
};

export default DisplayMyOrder;