import React from 'react';
import { Container } from 'react-bootstrap';
import './BannerBottom.css';

const BannerBottom = () => {
    return (
        <div className='banner-bottom-section'>
            <Container className='container'>
                <div className='banner-bottom-container'>
                    <div>
                        <h1>Hinter.conders</h1>
                        <h5>Many of many</h5>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BannerBottom;