import React from 'react';
import PropTypes from 'prop-types';

const SaleTile = props => (

<div>

<hgroup className="allorder">

    <h2>Sale No: 30 </h2>
    <h4>User: { props.user } </h4>  
    <h3>Name of Item: { props.name } </h3> 
    <h4>Date: { props.date } </h4>  
    <h4>Time: { props.time } </h4>
     <h3>Price: { props.price } </h3> 

 </hgroup>

</div>

);

SaleTile.propTypes = {
    index:PropTypes.number.isRequired,
    user:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
    
}

   


export default SaleTile;