import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Nav = props => (
 
<section className="usernav">
    
    <i className="ion-android-home icon-big" />
    <i className="ion-android-delete icon-big" />
    <span className="icon-items"> { props.allOrdersLength} </span>
    <Link to="/userorder"><i className="ion-android-cart icon-big" /></Link>
    <span className="loggeduser"> { props.username }</span>
    
</section>
   
);

Nav.propTypes = {
    allOrdersLength: PropTypes.number,
    username: PropTypes.string
};
   


export default Nav;