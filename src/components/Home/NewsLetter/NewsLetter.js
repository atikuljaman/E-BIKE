import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsInstagram } from 'react-icons/bs';
import { GoMailRead } from "react-icons/go";
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div>
            <Container>
                <Row className='g-4'>
                    <Col md={6}>
                        <Row className='g-4'>
                            <Col md={6}>
                                <div className='news-letter-right-container'>
                                    <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0366/2325/3549/files/instagram1.jpg?v=9696985231744495431" alt='' />
                                    <div className='news-letter-right-container-content'>
                                        <div>
                                            <BsInstagram className='insta-icon' />
                                            <p>Shop it</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='news-letter-right-container'>
                                    <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0366/2325/3549/files/instagram2.jpg?v=11125294870416858514" alt='' />
                                    <div className='news-letter-right-container-content'>
                                        <div>
                                            <BsInstagram className='insta-icon' />
                                            <p>Shop it</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='news-letter-right-container'>
                                    <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0366/2325/3549/files/instagram3.jpg?v=7387251562103457258" alt='' />
                                    <div className='news-letter-right-container-content'>
                                        <div>
                                            <BsInstagram className='insta-icon' />
                                            <p>Shop it</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='news-letter-right-container'>
                                    <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0366/2325/3549/files/instagram4.jpg?v=16268641338921769163" alt='' />
                                    <div className='news-letter-right-container-content'>
                                        <div>
                                            <BsInstagram className='insta-icon' />
                                            <p>Shop it</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <div className='news-letter-left-container'>
                            <div>
                                <GoMailRead className='mail-icon' />
                                <h3>Sign Up To Our Newsletter <br />
                                    And Receive 10% Off Your First Order!</h3>
                                <input placeholder='Email Address' />
                                <button>Subscribe</button>
                                <img className='img-fluid' src='https://cdn.shopify.com/s/files/1/0366/2325/3549/files/electric-icon.png?v=1584933915' alt='' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default NewsLetter;