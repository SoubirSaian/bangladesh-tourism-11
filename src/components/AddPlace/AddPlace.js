import React from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import './AddPlace.css';

    //    add place component 
const AddPlace = () => {
    //    using react-hook-form
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
                // sending a new place info to database
        axios.post('https://macabre-nightmare-78794.herokuapp.com/places',data)
        .then(res => {
            console.log(res);
            if(res.data.insertedId){
                window.alert("A new place added successfully");
            }
        })
    };

    return (
        <div className="add-place mb-5">
            <h2 className="text-center my-4">Add a new tourist spot</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="enter place name" />
                <input {...register("location")} placeholder="enter place location" />
                <input {...register("img")} placeholder="enter img url" />
                <textarea {...register("description")} placeholder="enter place description" />
                <input {...register("highlights")} placeholder="enter place highlights" />
                <input type="Submit" />
            </form>
        </div>
    );
};

export default AddPlace;