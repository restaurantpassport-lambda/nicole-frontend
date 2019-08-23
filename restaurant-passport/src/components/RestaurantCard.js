// Individual restaurant card
import React from 'react';

const RestaurantCard = ({name, city, address, description}) => {
    return(
        <div>
            <p>{name}</p>
            <p>{description}</p>
            <p>{address}</p>
            <p>{city}</p>
        </div>
    )
}

export default RestaurantCard;