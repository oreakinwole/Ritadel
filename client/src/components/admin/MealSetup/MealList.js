import React from 'react';
import PropTypes from 'prop-types';


const MealList = props => ( 
        <div>
            <p>{props.name}</p><span>{ props.price }</span>
        </div>
);


MealList.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};


export default MealList;