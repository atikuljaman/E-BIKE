import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item className='banner-container' interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://cdn.shopify.com/s/files/1/0366/2325/3549/files/slideshow-v2-img1.jpg?v=1584599749"
                        alt="First slide"
                    />
                    <div className='banner-content'>
                        <div className='banner-description'>
                            <p className='small-text'>Save 20%</p>
                            <p className='sub-heading'>Must haves</p>
                            <p className='heading'>Find my <span>E-bike</span></p>
                        </div>
                        <button>Shop now</button>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='banner-container' interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://cdn.shopify.com/s/files/1/0366/2325/3549/files/slideshow-v2-img2.jpg?v=1584599768"
                        alt="Second slide"
                    />
                    <div className='banner-content'>
                        <div className='banner-description'>
                            <p className='small-text'>Take the streets</p>
                            <p className='sub-heading'>Ride bikes</p>
                            <p className='heading'>Light <span>E-bike</span></p>
                        </div>
                        <button>Shop now</button>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='banner-container' interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://cdn.shopify.com/s/files/1/0366/2325/3549/files/slideshow-v2-img3.jpg?v=1584599780"
                        alt="Third slide"
                    />
                    <div className='banner-content'>
                        <div className='banner-description'>
                            <p className='small-text'>20% off</p>
                            <p className='sub-heading'>Have fun</p>
                            <p className='heading'>E-bike <span>brand</span></p>
                        </div>
                        <button>Shop now</button>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;