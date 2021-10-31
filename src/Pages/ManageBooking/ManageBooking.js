import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const ManageBooking = () => {
    const [allBookings, setAllBookings] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const size = 10;

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    useEffect(() => {
        axios.get(`http://localhost:5000/booking?page=${page}&&size=${size}`)
            .then(result => {
                const data = result.data;
                setAllBookings(data.results);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);

            })
    }, [page]);

    const deleteBooking = (id) => {
        const url = `http://localhost:5000/booking/${id}`;
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
    }

    return (
        <div className="booking-area thankYou-are">
            <div className="container">
                <h2 className="fw-bold text-uppercase mb-5 text-center">Booked Services</h2>
                <Table striped bordered hover>
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
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <select className="form-control" {...register("status")}>
                                                    <option className="text-caplitalize">{status}</option>
                                                    <option value="received">received</option>
                                                </select>
                                            </form>
                                        </td>
                                        <td>
                                            <button className="btn btn-success me-3">Update</button>
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