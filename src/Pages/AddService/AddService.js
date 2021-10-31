import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import image from '../../assets/service.png'
import './AddService.css';

const AddService = () => {
    // react hook form
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        axios.post('https://ghastly-shadow-61352.herokuapp.com/service', data)
            .then(result => {
                const data = result.data;
                if (data.insertedId) {
                    alert('Service has been added to database')
                }
            })
        reset();
    }

    return (
        <div className="container">
            <div className="add-service">
                <div className="d-flex align-items-center justify-content-around addService">
                    <div className="left-side">
                        <img src={image} alt="Service img" />
                    </div>
                    <div className="right-side">
                        <h2 className="fw-bold fs-4 text-uppercase text-danger mb-4">Add a new service</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-outline mb-4">
                                <input {...register("title", { required: true })} type="text" placeholder="Service Name" className="form-control" />
                            </div>
                            <div className="form-outline mb-4">
                                <input {...register("image", { required: true })} type="text" placeholder="Image URL" className="form-control" />
                            </div>

                            <div className="form-outline mb-4">
                                <input {...register("cost")} type="text" placeholder="Service Cost" className="form-control" />
                            </div>


                            <div className="form-outline mb-3">
                                <textarea {...register("description")} placeholder="Description" className="form-control" id="form6Example7" rows="4"></textarea>
                            </div>

                            <input type="submit" value="Add New Service" className="btn btn-danger btn-block btn-lg" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;