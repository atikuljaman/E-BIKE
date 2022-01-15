import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TopAccessories.css';

const TopAccessories = () => {
    return (
        <div className='top-accessories-section'>
            <div className='heading-container'>
                <h2 className='top-accessories-heading'>Top Accessories</h2>
                <p className='top-accessories-desc'>It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? Watch your back, but more importantly when you get out the shower</p>
            </div>
            <Container className='top-accessories-container'>
                <Row>
                    <Col md={4}>
                        <div className='accessories-detail'>
                            <img className='img-fluid rounded-circle' src="https://cdn.shopify.com/s/files/1/0366/2325/3549/files/banner-v3-img1.jpg?v=1584855875" alt='' />
                            <h2>SADDLE BIKE</h2>
                            <p>They never said winning was easy. Some people can’t handle success, I can. Lion! Special cloth alert</p>
                            <button>shop now</button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='accessories-detail'>
                            <img className='img-fluid rounded-circle' src="https://cdn.shopify.com/s/files/1/0366/2325/3549/files/banner-v3-img2.jpg?v=1584855895" alt='' />
                            <h2>PEDAL & WHEEL</h2>
                            <p>They never said winning was easy. Some people can’t handle success, I can. Lion! Special cloth alert</p>
                            <button>shop now</button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='accessories-detail'>
                            <img className='img-fluid rounded-circle' src="https://cdn.shopify.com/s/files/1/0366/2325/3549/files/banner-v3-img3.jpg?v=1584855907" alt='' />
                            <h2>HANDLEBARS</h2>
                            <p>You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut</p>
                            <button>shop now</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopAccessories;