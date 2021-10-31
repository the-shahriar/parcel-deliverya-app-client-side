import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Booking.css';
import useAuthentication from '../../hooks/useAuthentication';

const Booking = () => {
    const [service, setService] = useState({});
    const { id } = useParams();
    const history = useHistory();
    const url = `http://localhost:5000/service/${id}`;

    useEffect(() => {
        axios.get(url)
            .then(result => {
                setService(result.data)
            })
    }, [url])

    const { title, image, description, costPerQuantiy } = service;

    // get user value from auth
    const { allContexts } = useAuthentication();
    const { user } = allContexts;

    // react hook form
    const { register, handleSubmit, setFocus, setValue } = useForm();

    useEffect(() => {
        setValue('serviceName', title)
    }, [setValue, title])

    const onSubmit = (data, e) => {
        // console.log(data);
        axios.post('http://localhost:5000/booking', data)
            .then(res => {
                const result = res.data;
                if (result.insertedId) {
                    history.push(`/booking-received/${id}`)
                }
            })
        e.target.reset();

    };

    // set focus on cost if cost is not included in object
    useEffect(() => {

        setFocus("cost");

    }, [setFocus]);


    return (
        <div className="container">
            <div className="service-container d-flex align-items-center justify-content-around">
                <div className="left">
                    <img className="w-75" src={image} alt="Service img" />
                    <div>
                        <h2 className="fw-bold fs-4">{title}</h2>
                        <p className="w-75 fs-5">{description}</p>
                        <p className="fw-bold fs-5 bg-warning px-4 py-3 w-50 text-white">Cost Per Quantity:
                            ${costPerQuantiy}
                        </p>
                    </div>
                </div>
                <div className="right">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row mb-3">
                            <div className="col">
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="form6Example1">Name</label>
                                    <input defaultValue={user.displayName} {...register("name")} type="text" id="form6Example1" className="form-control" />
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline">
                                    <label className="form-label" htmlFor="form6Example2">Email</label>
                                    <input defaultValue={user.email} {...register("email")} type="email" id="form6Example2" className="form-control" />

                                </div>
                            </div>
                        </div>
                        <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="form6Example6">Phone</label>
                            <input {...register("phone", { required: true })} type="number" id="form6Example6" className="form-control" />
                        </div>

                        <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="form6Example3">From</label>
                            <select {...register("pickup", { required: true })} className="form-control">
                                <option value="">Select...</option>
                                <option value="dhanmondi">Dhanmondi</option>
                                <option value="uttara">Uttara</option>
                                <option value="mirpur">Mirpur</option>
                                <option value="mohakhali">Mohakhali</option>
                                <option value="baridhara">Baridhara</option>
                                <option value="gulshan">Gulshan</option>
                            </select>

                        </div>

                        <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="form6Example3">To</label>
                            <select {...register("to", { required: true })} className="form-control">
                                <option value="">Select...</option>
                                <option value="dhanmondi">Dhanmondi</option>
                                <option value="uttara">Uttara</option>
                                <option value="mirpur">Mirpur</option>
                                <option value="mohakhali">Mohakhali</option>
                                <option value="baridhara">Baridhara</option>
                                <option value="gulshan">Gulshan</option>
                            </select>
                        </div>

                        <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="form6Example7">Additional information</label>
                            <input type="hidden" defaultValue={title} name="name" {...register("serviceName")} />
                            <textarea {...register("additional_info")} className="form-control" id="form6Example7" rows="3"></textarea>
                        </div>

                        <div className="form-outline mb-3">
                            <label className="form-label" htmlFor="form6Example7">Cost</label>
                            <input type="hidden" defaultValue={id} name="name" {...register("service_id")} />
                            <input type="hidden" defaultValue={title} name="name" {...register("serviceName")} />
                            <input type="hidden" defaultValue="pending" name="name" {...register("status")} />
                            <input defaultValue={costPerQuantiy} {...register("cost")} type="text" id="form6Example6" className="form-control" />
                        </div>

                        <input type="submit" value="Get Service" className="btn btn-danger btn-block" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Booking;