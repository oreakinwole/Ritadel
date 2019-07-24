import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = props =>{ 
const totalMenuItems = props.theMenu.length;
    
return (
<section className="usernav">
    <i className="ion-android-home icon-big"></i>
    <i className="ion-android-delete icon-big" onClick = { props.clearEvery }></i>
    <span className="icon-items">Items:{ totalMenuItems }</span>
    <i className="ion-android-refresh icon-big"></i>
    <Link to="/adminmealsetup"> <i className="ion-fork icon-big"></i> </Link>
</section>
   
);
}

Nav.propTypes = {
    theMenu: PropTypes.array.isRequired,
    clearEvery: PropTypes.func.isRequired
};

export default Nav;