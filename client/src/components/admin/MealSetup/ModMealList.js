import React from 'react';
import PropTypes from 'prop-types';

const ModMealList = props => ( 
   
    <option> {props.name} </option>
   
);


ModMealList.propTypes = {
    name: PropTypes.string.isRequired
};


export default ModMealList;