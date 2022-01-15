import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {
    NavLink
} from "react-router-dom";
import { BsSearch, BsCart3 } from "react-icons/bs";
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar className='navbar-container' expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className='img-fluid logo' src="https://cdn.shopify.com/s/files/1/0366/2325/3549/files/logo.png?v=1585015777" alt='' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className='navbar-link' to="/home">Home</NavLink>
                            <NavLink className='navbar-link' to="/shop">Shop</NavLink>
                            <NavLink className='navbar-link' to="/blog">Blog</NavLink>
                            <NavLink className='navbar-link' to="/about">About</NavLink>
                            <NavLink className='navbar-link' to="/contact">Contact</NavLink>
                            <NavLink to="/signIn">
                                <button className='sign-in-btn border-0'>Sign In</button>
                            </NavLink>
                        </Nav>
                        <div className='navbar-right'>
                            <div><BsSearch className='navbar-icon' /></div>
                            <div><BsCart3 className='navbar-icon' /></div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;