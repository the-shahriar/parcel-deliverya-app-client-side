import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container py-4 ">
                <div className="row gy-4 gx-5">
                    <div className="col-lg-4 col-md-6">
                        <h4 className="fw-bold fs-3 text-danger text-uppercase"><span className="fw-bold fs-3 text-black">Mr.</span> Mail</h4>
                        <p className="text-black">Founded in 2021, Mr. Mail is among the fastest growing tech startups in Asia which has dedicated itself to create solutions to minimize infrastructural problems. With a hope to accelerate the establishment of digital Bangladesh.
                        </p>
                        <p className="text-black mb-0">2021&copy; Copyrights. All rights reserved. </p>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-black mb-3">Quick links</h5>
                        <ul className="list-unstyled footer-menu text-black">
                            <li><a href="#s">Home</a></li>
                            <li><a href="#s">About</a></li>
                            <li><a href="#s">Get started</a></li>
                            <li><a href="#s">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-black mb-3">Quick links</h5>
                        <ul className="list-unstyled footer-menu text-black">
                            <li><a href="#s">Home</a></li>
                            <li><a href="#s">About</a></li>
                            <li><a href="#s">Get started</a></li>
                            <li><a href="#s">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h5 className="text-black mb-3">Newsletter</h5>
                        <p className="small text-black">Get latest offer, promotion and news</p>
                        <form action="#">
                            <div className="input-group mb-3">
                                <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn btn-danger" id="button-addon2" type="button">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;