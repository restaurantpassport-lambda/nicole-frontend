// This section displays all the restaurants entered or visited by the user
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Restaurant = () => {
    const [rest, setRest] = useState([]);

    useEffect(() => {
        axios.get(`https://build-restaurant-passport.herokuapp.com/cities/restaurants`)
        .then(res => {
            console.log(res);
            setRest(res.data.results);
        })
        .catch(err => console.log(err));
    }, []);

    return(
        <div>
            {rest.map(r => (
                <RestaurantCard
                key={r.city_id}
                name={r.name}
                city={r.city}
                address={r.address}
                description={r.description}
                />
            ))}
        </div>
    );
}

export default Restaurant;