import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageBooking = () => {
    const [allBookings, setAllBookings] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const size = 10;

    useEffect(() => {
        axios.get(`https://ghastly-shadow-61352.herokuapp.com/booking?page=${page}&&size=${size}`)
            .then(result => {
                const data = result.data;
                setAllBookings(data.results);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);

            })
    }, [page]);

    const deleteBooking = (id) => {
        const url = `https://ghastly-shadow-61352.herokuapp.com/booking/${id}`;
        const proceed = window.confirm("Are you sure?")
        if (proceed) {
            axios.delete(url)
                .then(result => {
                    const data = result.data;
                    if (data.deletedCount) {
                        alert('Your service has been canceled');
                        const remaining = allBookings.filter(booking => booking._id !== id)
                        setAllBookings(remaining);
                    }
                })
        }
    };

    // getting the status updatedValue
    const statusRef = useRef();

    const updateBooking = (id) => {
        const statusValue = statusRef.current.value;
        const updatedStatus = { status: statusValue }

        axios.put(`https://ghastly-shadow-61352.herokuapp.com/booking/${id}`, updatedStatus)
            .then(res => {
                const result = res.data;
                if (result.modifiedCount > 0) {
                    alert("Booking status updated");
                }

            })
    };


    return (
        <div className="booking-area thankYou-are mb-5">
            <div className="container">
                <h2 className="fw-bold text-uppercase mb-5 text-center">Booked Services</h2>
                <Table responsive="md" striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service Type</th>
                            <th>Cost</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allBookings.map(booking => {
                                const { _id, name, email, serviceName, status, cost } = booking;

                                return (
                                    <tr key={_id}>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{serviceName}</td>
                                        <td>{cost}</td>
                                        <td>
                                            <select className="form-control">
                                                <option className="text-caplitalize">{status}</option>
                                                <option ref={statusRef} value="received">received</option>
                                            </select>
                                        </td>
                                        <td>
                                            <button onClick={() => updateBooking(_id)} className="btn btn-success me-3">Update</button>
                                            <button onClick={() => deleteBooking(_id)} className="btn btn-warning">Cancel</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <div className="pagination">
                    {
                        [...Array(pageCount).keys()].map(number => <button className={number === page ? 'selected btn btn-danger' : 'outline-danger'} key={number} onClick={() => setPage(number)}
                        >{number + 1}</button>)
                    }

                </div>
            </div>
        </div>
    );
};

export default ManageBooking;