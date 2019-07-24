import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const Nav = props => (
     <section className="usernav"> 
    <Link to = "/adminmenu"> <i className="ion-android-arrow-back icon-big"></i> </Link>
    <i className="ion-android-delete icon-big" onClick= { props.clearAll } > </i>
    <span className="icon-items">Meals</span>
    <Link to = "/adminmenu"> <i className="ion-android-list icon-big"></i> </Link>
    <i className="ion-android-menu icon-big"></i>
    
</section>
);

Nav.propTypes = {
    clearAll: PropTypes.func.isRequired
};


export default Nav;