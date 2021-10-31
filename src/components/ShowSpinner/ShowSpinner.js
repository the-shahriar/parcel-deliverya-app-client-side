import React from 'react';
import { Spinner } from 'react-bootstrap';

const ShowSpinner = () => {
    return (
        <div className="thankYou-are text-center">
            <Spinner animation="border" variant="warning" />
        </div>
    );
};

export default ShowSpinner;