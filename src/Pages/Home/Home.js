import React from 'react';
import Banner from '../../components/Banner/Banner';
import mobileUi from '../../assets/document.png';
import { BsArrowRight } from "react-icons/bs";
import './Home.css';
import Services from '../../components/Services/Services';
import Questions from '../../components/Questions/Questions';


const Home = () => {
    return (
        <div className="home">
            {/* Banner */}
            <Banner></Banner>

            {/* Mr. Mail Platform */}
            <div className="about-container">
                <h2 className="text-uppercase fs-2 fw-bold text-center title">The Platform</h2>
                <hr className="mx-auto text-center" />
                <p className="fs-5 text-center">Here’s everything <span className="fw-bold fs-4 text-danger">Mr. Mail</span> provides just for you!</p>
                <div className="about d-flex align-items-center justify-content-center">
                    <div className="mr-5">
                        <div className="mb-5">
                            <h2 className="fw-bold fs-4">On Demand Delivery</h2>
                            <p className="fs-6">Left your charger or keys at home? Have it delivered to <br /> you on Pathao Parcel, without any hassle!</p>
                        </div>
                        <div className="mb-5">
                            <h2 className="fw-bold fs-4">Trust Us</h2>
                            <p className="fs-6">You can trust us to deliver your most confidential <br /> documents to the desired place absolutely intact right on <br /> time!</p>
                        </div>
                        <div className="mb-3">
                            <h2 className="fw-bold fs-4">Emergency? We are ready!</h2>
                            <p className="fs-6">With Mr. Mail Parcel, you can get your item in the quickest <br /> time. Because your emergencies are Parcel’s biggest <br /> concern!</p>
                        </div>
                        <button className="btn btn-danger px-4 py-2">Learn more <BsArrowRight className="ms-2" /></button>
                    </div>
                    <div >
                        <img className="mobile-ui" src={mobileUi} alt="Mobile UI" />
                    </div>
                </div>
            </div>

            {/* Services */}

            <Services></Services>

            {/* FAQ */}
            <Questions></Questions>
        </div>
    );
};

export default Home;