import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
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
                            <Nav.Link className="text-black fs-5" as={HashLink} to="/pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user.email ?
                                    <div className="bg-custom">
                                        <img src={user.photoURL} alt="Profile" className="me-4" />
                                        <button onClick={logOut} className="btn btn-danger">Logout</button>
                                    </div>
                                    :
                                    <div className="d-flex">
                                        <Nav.Link className="text-black px-5 fs-6 me-4 bg-warning" as={HashLink} to="/login">Login</Nav.Link>
                                        <Nav.Link className="text-white px-5 bg-danger fs-6 me-4" as={HashLink} to="/admin">Admin</Nav.Link>
                                    </div>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </header >
    );
};

export default Header;