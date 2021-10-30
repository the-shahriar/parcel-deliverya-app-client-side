import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuthentication from '../../hooks/useAuthentication';
import './ThankYou.css';

const ThankYou = () => {
    const [service, setService] = useState({});
    const { id } = useParams();
    const { allContexts } = useAuthentication();
    const { user } = allContexts;

    const url = `http://localhost:5000/service/${id}`;

    useEffect(() => {
        axios.get(url)
            .then(result => {
                setService(result.data)
            })
    }, [])

    const { title, costPerQuantiy } = service;

    return (
        <div className="thankYou-are">
            <div className="container">
                <h4 className="text-danger nav-bg my-4 py-4 px-3 w-50">Thank you for booked our service.</h4>
                <h5>Booking details</h5>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{user.displayName}</td>
                            <td>{user.email}</td>
                            <td>{title}</td>
                            <td>{costPerQuantiy}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ThankYou;