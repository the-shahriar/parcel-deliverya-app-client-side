import React from 'react';
import image from '../../assets/dep.jpg';
import image2 from '../../assets/activities-4.png';
import './About.css';
import Questions from '../../components/Questions/Questions';

const About = () => {
    return (
        <div>
            <div className="main">
                <div className="top-section">
                    <img src={image} alt="" />
                </div>
                <div className="bottom">
                    <h5 className="fw-bold fs-5 text-white">Our Vision</h5>
                    <h2 className="fw-bold fs-2 text-white">Moving Bangladesh forward and upward by <br /> building the platform for entrepreneurs.</h2>
                </div>
            </div>
            <div className="about-container my-5">
                <h2 className="text-uppercase fs-2 fw-bold text-center title">What We Stand For</h2>
                <hr className="mx-auto text-center" />
                <p className="text-center fs-5">We work everyday with values we don’t compromise.</p>
                <div className="about mt-5 d-flex align-items-center justify-content-center">
                    <div className=" me-lg-5">
                        <div className="mb-5">
                            <h2 className="fw-bold fs-4">Customer First.</h2>
                            <p className="fs-5 text">Mr. Mail exists to serve. Everything we do impact <br /> thousands of people.</p>
                        </div>
                        <div className="mb-5">
                            <h2 className="fw-bold fs-4">One Platform.</h2>
                            <p className="fs-5">Nothing at Mr. Mail is someone else’s problem. We <br /> all work together on a shared mission.</p>
                        </div>
                        <div className="mb-5">
                            <h2 className="fw-bold fs-4">Empathy and Kindness.</h2>
                            <p className="fs-5">We want our people to be smart and driven but <br /> also be kind and have empathy for others</p>
                        </div>
                        <div className="mb-3">
                            <h2 className="fw-bold fs-4">Everyone Matters.</h2>
                            <p className="fs-5">Anyone who is a part of the Mr. Mail family is <br /> valuable to us. No one is of any less important than <br /> someone else.</p>
                        </div>

                    </div>
                    <div className="ms-5">
                        <img className="mobile-ui" src={image2} alt="Mobile UI" />
                    </div>
                </div>
            </div>
            {/* FAQ */}
            <Questions></Questions>
        </div>
    );
};

export default About;