import React, { useEffect, useState } from 'react';
import DisplayAllOrder from '../DisplayAllOrder/DisplayAllOrder';
import './ManageOrder.css';

const ManageOrder = () => {
    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        fetch('https://macabre-nightmare-78794.herokuapp.com/myOrder')
            .then(res => res.json())
            .then(data => setOrders(data));
    },[])

        // handle delete operation 
    const handleDelete=(id)=>{
    
        const proceed = window.confirm('would you like to delete');
        if(proceed){
            const url = `https://macabre-nightmare-78794.herokuapp.com/myOrder/${id}`

            fetch(url,{method : 'DELETE'})
                .then(res => res.json())
                .then(data =>{
                    if(data.deletedCount > 0){
                        window.alert('deleted successfully');
                        const remainorder = orders.filter(order => order._id !== id);
                        setOrders(remainorder);
                    }
                })
        }
    }

    return (
        <div className="manage-order">
            <h2 className="text-center text-danger">Manage your orders</h2>
            {
                orders.map(order => <DisplayAllOrder key={order._id} allOrder={order}>
                    <button className="btn btn-outline-danger" onClick={()=> handleDelete(order._id)}>delete</button>
                </DisplayAllOrder>)
            }
        </div>
    );
};

export default ManageOrder;