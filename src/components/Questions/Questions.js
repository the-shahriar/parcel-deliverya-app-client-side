import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Questions.css';

const Questions = () => {
    return (
        <div className="faq">
            <div className="container">
                <h2 className="fw-bold fs-4 my-5 text-center">Frequently Asked Questions</h2>
                <Accordion defaultActiveKey="0" flush className="accordion">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How do I contact with agent?</Accordion.Header>
                        <Accordion.Body>
                            After accepting your booking, you will see the deliverers’ name, picture and user rating appear on your phone screen, along with a phone icon. Press the phone icon beside the contact number to call the deliverer.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How do I cancel booking?</Accordion.Header>
                        <Accordion.Body>
                            You can cancel the request up until the start of your delivery. To do this, you have to press either “Cancel Request” or a red “X” sign when applicable.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How do I track my booking?</Accordion.Header>
                        <Accordion.Body>
                            There are three stages in tracking your delivery. After the deliverer accepts your requests, your phone screen will show “Request Accepted”. The delivery status will change to “In Transit” the moment the deliverer starts the request. When the deliverer has successfully delivered your item, the status will change to “Delivered”. All throughout, your phone screen will display a phone icon to call the deliverer. Press on the phone icon to call the deliverer if you wish to know detailed location of your deliverer.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>How do I know how much to pay?</Accordion.Header>
                        <Accordion.Body>
                            After you choose your pick-up, drop-off location, receiver information and product category, your phone screen will display Estimated Distance Travelled and the corresponding total payable fare that you have to pay the deliverer while handing them your item during pickup.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Questions;