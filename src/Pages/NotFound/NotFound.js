import React from 'react';
import './NotFound.css';
import image from '../../assets/not-found.jpg';

const NotFound = () => {
    return (
        <div className="area text-center">
            <img src={image} alt="" />
            <p className="fs-4 mb-5 text-danger fw-bold text-uppercase">The page you are looking for is not available</p>
        </div>
    );
};

export default NotFound;