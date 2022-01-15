import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-section'>
            <Container>
                <Row>
                    <Col className='footer-content' md={3}>
                        <h6>SERVICES</h6>
                        <p>E-bike repair</p>
                        <p>Worldwide shipping</p>
                        <p>Free return</p>
                        <p>Member discount</p>
                        <p>24/7 Support</p>
                    </Col>
                    <Col className='footer-content' md={3}>
                        <h6>INFORMATION</h6>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>All Collections</p>
                        <p>Delivery Information</p>
                        <p>Privacy Policy</p>
                    </Col>
                    <Col className='footer-content' md={3}>
                        <h6>SUPPORT</h6>
                        <p>Terms & conditions</p>
                        <p>Our policy</p>
                        <p>Visit our forum</p>
                        <p>Mail us</p>
                        <p>F.A.Qs</p>
                    </Col>
                    <Col className='footer-content' md={3}>
                        <h5>The good stuff in your inbox</h5>
                        <p>News & updates from E-bike. <br />
                            No spam, we promise.</p>
                        <InputGroup className="my-4">
                            <FormControl
                                className='email-input'
                                placeholder="Email"
                                aria-label="email"
                                aria-describedby="basic-addon2"
                            />
                            <Button className='sign-up-btn' variant="outline-secondary" id="button-addon2">
                                Sign up
                            </Button>
                        </InputGroup>
                        <div className='footer-icons-container'>
                            <div><BsTwitter /></div>
                            <div><FaFacebookF /></div>
                            <div><BsInstagram /></div>
                            <div><BsWhatsapp /></div>
                        </div>
                    </Col>
                    <Container className='footer-bottom'>
                        <p>Website by <span>Atikul Jaman</span> Copyright E-bike</p>
                        <div>
                            <img className='img-fluid' src='https://cdn.shopify.com/s/files/1/0366/2325/3549/files/pay.png?v=1584781374' alt='' />
                        </div>
                    </Container>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;