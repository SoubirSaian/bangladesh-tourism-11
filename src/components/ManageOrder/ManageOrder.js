import React, { useEffect, useState } from 'react';
import DisplayAllOrder from '../DisplayAllOrder/DisplayAllOrder';
import './ManageOrder.css';

const ManageOrder = () => {
    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/myOrder')
            .then(res => res.json())
            .then(data => setOrders(data));
    },[])

    return (
        <div>
            {
                orders.map(order => <DisplayAllOrder key={order._id} allOrder={order}></DisplayAllOrder>)
            }
        </div>
    );
};

export default ManageOrder;