import React from 'react';
import img1 from '../../assets/clients/medical-courier.jpg';
import img2 from '../../assets/clients/gift-delivery.jpg';
import img3 from '../../assets/clients/accessories.jpg';
import img4 from '../../assets/clients/food-delivery.jpg';
import img5 from '../../assets/clients/cargo_delivery_small.jpg';
import img6 from '../../assets/clients/fruits.jpg';
import './HappyClients.css';

const HappyClients = () => {
    return (
        <div className="container clients-area">
            <h2 className="text-uppercase fs-2 fw-bold text-center title mt-5">Our Happy Clients</h2>
            <hr className="mx-auto text-center" />
            <div className="happyClients">
                <img src={img1} alt="Happy Clients" />
                <img src={img2} alt="Happy Clients" />
                <img src={img3} alt="Happy Clients" />
                <img src={img4} alt="Happy Clients" />
                <img src={img5} alt="Happy Clients" />
                <img src={img6} alt="Happy Clients" />
            </div>
        </div>
    );
};

export default HappyClients;