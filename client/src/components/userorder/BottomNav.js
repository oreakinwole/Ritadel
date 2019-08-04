import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Nav = props => (
    
    <section className="usernav">

           <Link to = "/usermenu"> <i className="ion-android-arrow-back icon-big" /> </Link>
            <i className="ion-android-delete" />
            <span> Orders </span>
            <i className="ion-android-refresh" />
            <span>{ props.username } </span>
            
    </section>
);

Nav.propTypes = {
    username: PropTypes.string
};

export default Nav;