import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuthentication from '../../hooks/useAuthentication';

const MyBooking = () => {
    const [addedService, setAddedService] = useState([]);

    // getting allContext from auth
    const { allContexts } = useAuthentication();

    // getting user if loogged in.
    const { user } = allContexts;

    // fetching booking data from database
    useEffect(() => {
        axios.get('http://localhost:5000/booking')
            .then(res => {
                const result = res.data;
                const datas = result.results;
                const myService = datas.filter(data => data.email === user.email);
                setAddedService(myService);
            })
    }, [user.email])

    // delete booking
    const deleteBooking = (id) => {
        const url = `http://localhost:5000/booking/${id}`;
        const proceed = window.confirm("Are you sure?")
        if (proceed) {
            axios.delete(url)
                .then(result => {
                    const data = result.data;
                    if (data.deletedCount) {
                        alert('Your service has been canceled');
                        const remaining = addedService.filter(booking => booking._id !== id)
                        setAddedService(remaining);
                    }
                })
        }
    }

    return (
        <div className="thankYou-are mb-5">
            <div className="container">
                <h2 className="fw-bold fs-4 mb-5">Welcome, <span className="text-danger">{user.displayName}</span>!</h2>
                <h3 className="fw-bold fs-5 text-uppercase mb-5">Your Booking</h3>
                <Table responsive="md" hover>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Service Name</th>
                            <th>Cost</th>
                            <th>Phone</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addedService.map(service => {
                                const { _id, email, pickup, to, phone, serviceName, cost, status } = service;

                                return (
                                    <tr key={_id}>
                                        <td>{email}</td>
                                        <td>{serviceName}</td>
                                        <td>{cost}</td>
                                        <td>{phone}</td>
                                        <td>{pickup.toUpperCase()}</td>
                                        <td>{to.toUpperCase()}</td>
                                        <td>{status.toUpperCase()}</td>
                                        <td>
                                            <button onClick={() => deleteBooking(_id)} className="btn btn-warning">Cancel</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyBooking;