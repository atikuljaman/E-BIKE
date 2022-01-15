import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Brands.css';

const Brands = () => {
    return (
        <div>
            <Container className='brands-section'>
                <Row className='gy-3'>
                    <Col md={1}>

                    </Col>
                    <Col className='text-center' md={2}>
                        <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0366/2325/3549/files/brand1.png?v=1584947182" alt='' />
                    </Col>
                    <Col className='text-center' md={2}>
                        <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0366/2325/3549/files/brand2.png?v=1584947192" alt='' />
                    </Col>
                    <Col className='text-center' md={2}>
                        <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0366/2325/3549/files/brand3.png?v=1584947201" alt='' />
                    </Col>
                    <Col className='text-center' md={2}>
                        <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0366/2325/3549/files/brand4.png?v=1584947209" alt='' />
                    </Col>
                    <Col className='text-center' md={2}>
                        <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0366/2325/3549/files/brand5.png?v=1584947217" alt='' />
                    </Col>
                    <Col md={1}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Brands;