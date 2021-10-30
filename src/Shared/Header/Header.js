import React from 'react';
import { Container, Dropdown, Nav, Navbar, } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuthentication from '../../hooks/useAuthentication';
import './Header.css';

const Header = () => {
    const { allContexts } = useAuthentication();
    const { user, logOut } = allContexts;
    return (
        <header>
            <Navbar className="nav-bg" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand className="fw-bold fs-3 text-danger text-uppercase" as={HashLink} to='/home'><span className="fw-bold fs-3 text-black">Mr.</span> Mail</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav
                            className="my-2 my-lg-0 me-auto"
                        >
                            <Nav.Link className="text-black fs-5 me-4" as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link className="text-black fs-5 me-4" as={HashLink} to="/about">About</Nav.Link>
                            <Nav.Link className="text-black fs-5">Blog</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user.email ?
                                    <div className="bg-custom">
                                        <Dropdown>
                                            <Dropdown.Toggle variant="white" id="dropdown-basic">
                                                <img src={user.photoURL} alt="Profile" />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>

                                                <Dropdown.Item as={HashLink} to="/my-booking">My Booking</Dropdown.Item>
                                                <Dropdown.Item as={HashLink} to="/manage-booking">Manage Booking</Dropdown.Item>
                                                <Dropdown.Item onClick={logOut} className="btn btn-danger">Logout</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    :

                                    <Nav.Link className="text-white px-5 fs-6 me-4 bg-danger" as={HashLink} to="/login">Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </header >
    );
};

export default Header;