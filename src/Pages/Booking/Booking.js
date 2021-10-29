import React from 'react';
import { useParams } from 'react-router';
import useAuthentication from '../../hooks/useAuthentication';

const Booking = () => {
    const { services } = useAuthentication();
    const { id } = useParams();
    console.log(id);

    return (
        <div>

        </div>
    );
};

export default Booking;