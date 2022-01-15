import React from 'react';
import Footer from '../../SharedPage/Footer/Footer';
import Header from '../../SharedPage/Header/Header';
import Banner from '../Banner/Banner';
import BannerBottom from '../BannerBottom/BannerBottom';
import Brands from '../Brands/Brands';
import Category from '../Category/Category/Category';
import NewArrivalsHome from '../NewArrivalsHome/NewArrivalsHome';
import NewsLetter from '../NewsLetter/NewsLetter';
import TopAccessories from '../TopAccessories/TopAccessories';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <TopAccessories />
            <Category />
            <BannerBottom />
            <NewArrivalsHome />
            <Brands />
            <NewsLetter />
            <Footer />
        </div>
    );
};

export default Home;