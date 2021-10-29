import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand className="text-danger fw-bold fs-3" as={HashLink} to='/home'><span className="fw-bold fs-3">Mr.</span> Mail</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav
                            className="my-2 my-lg-0 me-auto"
                        >
                            <Nav.Link className="text-black fs-5 me-4" as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link className="text-black fs-5 me-4" as={HashLink} to="/about">About</Nav.Link>
                            <Nav.Link className="text-black fs-5 me-4" as={HashLink} to="/services">Services</Nav.Link>
                            <Nav.Link className="text-black fs-5" as={HashLink} to="/pricing">Pricing</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link className="text-white px-5 fs-6 me-4 bg-primary" as={HashLink} to="/login">Login</Nav.Link>
                            <Nav.Link className="text-black px-5 bg-warning fs-6 me-4" as={HashLink} to="/admin">Admin</Nav.Link>

                            <NavDropdown title="Admin" className="text-black fs-6">
                                <NavDropdown.Item className="text-black fs-6" as={HashLink}>L</NavDropdown.Item>
                                <NavDropdown.Item >Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    );
};

export default Header;