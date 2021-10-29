import React from 'react';
import banner from '../../assets/3333449-removebg.png';
import CountUp from 'react-countup';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-area">
            {/* Banner */}
            <div className="banner d-flex align-items-center justify-content-around">
                <div>
                    <h2>#1 Platform <br /> in the country <br /> for parcel delivery.</h2>
                    <p className="fs-5 text-danger">We deliver your parcel with 100% care.</p>
                </div>
                <div className="banner-image">
                    <img src={banner} alt="Banner" />
                </div>
            </div>

            {/* Achievements */}

            <div className="d-flex align-items-center justify-content-center achievements">
                <div className="achievement">
                    <CountUp start={0} end={6} suffix=" Million+" duration={6} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                    <h2>App Downloads</h2>
                </div>
                <div className="achievement">
                    <CountUp start={0} end={50} suffix=" Million+" duration={3} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                    <h2>Parcel Delivered</h2>
                </div>
                <div className="achievement">
                    <CountUp start={0} end={10} suffix=" Million+" duration={6} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                    <h2>Live Impacted</h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;