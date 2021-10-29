import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { useHistory } from 'react-router';
import useServices from '../../hooks/useServices';
import './Services.css';

const Services = () => {
    const [services] = useServices();

    const history = useHistory();
    const handleGetService = (id) => {
        const url = `/book/${id}`;
        history.push(url)
    }

    return (
        <div className="services-container">
            <h2 className="text-uppercase fs-2 fw-bold text-center title text-danger">What can be send</h2>
            <hr className="mx-auto text-center mb-5" />
            <div className="services">
                {
                    services.map(service => {
                        const { id, image, title, description } = service;
                        return (
                            <div key={id} className="service text-center">
                                <img src={image} alt="" />
                                <h4 className="fs-4 fw-bold mt-4">{title}</h4>
                                <p className="fs-6">{description.slice(0, 90)}</p>
                                <button onClick={() => handleGetService(id)} className="btn btn-danger text-white px-4">Get Service <BsArrowRight className="ms-2" /></button>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default Services;