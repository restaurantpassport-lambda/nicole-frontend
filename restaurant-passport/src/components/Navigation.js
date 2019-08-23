import React, {useState} from 'react';
import {Route, NavLink} from 'react-router-dom';

import Home from './Home.js';
import Passport from './Passport.js';
import Restaurant from './Restaurant.js';
import RestaurantCard from './RestaurantCard.js';

const Navigation = () => {

    return(
        <div>
        <ul>
            <li>
                <NavLink exact to="/" activeClassName="activeNavButton">Home</NavLink>
            </li>
            <li>
                <NavLink to="/passport" activeClassName="activeNavButton">Passport</NavLink>
            </li>
            <li>
                <NavLink to="/restaurants" activeClassName="activeNavButton">Restaurants</NavLink>
            </li>
        </ul>

        <Route exact path="/" component={Home} />

        <Route exact path="/passport" component={Passport}/>

        <Route exact path="/restaurant" component={Restaurant}/>
        <Route path="/restaurant/:id" component={RestaurantCard}/>
        </div>
    )
}

export default Navigation;