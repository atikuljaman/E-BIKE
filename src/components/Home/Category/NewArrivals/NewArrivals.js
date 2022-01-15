import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { BsBag, BsHeartFill, BsSearch } from 'react-icons/bs';
import Rating from 'react-rating';
import './NewArrivals.css';

const NewArrivals = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <>
            <Container>
                <Row className='gy-5'>
                    {
                        data.map((product) => (
                            product?.model === 'new' &&
                            <Col key={product?.name} className='card-container' md={3}>
                                <Card>
                                    <div className='img-container'>
                                        <Card.Img className='product-img' variant="top" src={product?.img} />
                                        <div className='cart-overlay'>
                                            <div className='cart-overlay-icon'><BsHeartFill /></div>
                                            <div className='cart-overlay-icon'><BsBag /></div>
                                            <div className='cart-overlay-icon'><BsSearch /></div>
                                        </div>
                                    </div>
                                    <Card.Body className='text-center'>
                                        <Card.Title><h6 className='mt-2'>{product?.name}</h6></Card.Title>
                                        <Card.Text>
                                            <Rating
                                                initialRating={product?.rating}
                                                readonly
                                                emptySymbol="far fa-star"
                                                fullSymbol="fas fa-star"
                                                className='rating'
                                            />
                                            <h5 className='fw-bold'>{product?.price}</h5>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    );
};

export default NewArrivals;