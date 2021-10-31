import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import DisplayMyOrder from '../DisplayMyOrder/DisplayMyOrder';
import './MyOrder.css';

        // myorder handler component 
const MyOrder = () => {

    const {user} = useAuth();
    const myEmail = user.email;

    const [allOrders,setAllOrders] = useState([]);
    
            // fetching my order data from database 
    useEffect( ()=>{
        fetch('https://macabre-nightmare-78794.herokuapp.com/myOrder')
            .then(res => res.json())
            .then(data => setAllOrders(data));
    },[]);

            //   deleting a item operation 

    const handleDelete=(id)=>{
    
        const proceed = window.confirm('would you like to delete');
        if(proceed){
            const url = `https://macabre-nightmare-78794.herokuapp.com/myOrder/${id}`

            fetch(url,{method : 'DELETE'})
                .then(res => res.json())
                .then(data =>{
                    if(data.deletedCount > 0){
                        window.alert('deleted successfully');
                        const remainorder = myOrders.filter(order => order._id !== id);
                        setAllOrders(remainorder);
                    }
                })
        }
    }

        //   filtering order by user emailid 
    const myOrders = allOrders.filter(order => order.userEmail === myEmail);
    

    return (
        <div className="my-order">
            <h2 className="text-success text-center">all of your orders</h2>
            {
                myOrders.map(myOrder => <DisplayMyOrder key={myOrder._id} myOrder={myOrder}>
                    <button className="btn btn-outline-danger" onClick={()=> handleDelete(myOrder._id)}>delete</button>
                </DisplayMyOrder>)
            }
        </div>
    );
};

export default MyOrder;