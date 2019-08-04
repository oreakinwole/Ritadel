import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Nav = props => (
 
<section className="usernav">
    
    <i className="ion-android-home" />
    <i className="ion-android-delete" />
    <span> { props.allOrdersLength} </span>
    <Link to="/userorder"><i className="ion-android-cart"/></Link>
    <span> { props.username }</span>
    
</section>
   
);

Nav.propTypes = {
    allOrdersLength: PropTypes.number,
    username: PropTypes.string
};
   


export default Nav;