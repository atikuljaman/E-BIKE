import React from 'react';
import {
    Switch,
    Route,
    NavLink,
    useRouteMatch
} from "react-router-dom";
import BestSellers from '../BestSellers/BestSellers';
import NewArrivals from '../NewArrivals/NewArrivals';
import TopRates from '../TopRates/TopRates';
import './Category.css';

const Category = () => {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <div className='heading-container'>
                <h2 className='top-accessories-heading'>BEST E-BIKE</h2>
            </div>
            <div className='text-center category-link-container'>
                <NavLink activeClassName="selected" className='category-link' to={`${url}`}>New Arrivals</NavLink>
                <NavLink activeClassName="selected" className='category-link' to={`${url}/bestSellers`}>Best Sellers</NavLink>
                <NavLink activeClassName="selected" className='category-link' to={`${url}/topRates`}>Top Rates</NavLink>
            </div>

            <Switch>
                <Route exact path={path}>
                    <NewArrivals />
                </Route>
                <Route path={`${path}/bestSellers`}>
                    <BestSellers />
                </Route>
                <Route path={`${path}/topRates`}>
                    <TopRates />
                </Route>
            </Switch>
        </div>
    );
};

export default Category;