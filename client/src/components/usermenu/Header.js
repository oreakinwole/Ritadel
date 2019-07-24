import React from 'react';
import PropTypes from 'prop-types';



const Header = props => (

    <header className="user_menu">
        
        <h1> { props.headerTitle } </h1>
        <i className = "ion-log-out log-out-ic-big"
        onClick = { 
            () => {

            sessionStorage.removeItem('ritadeltoken');
            
            window.location.assign("/");
            
            }
        } 
        
        />
        
    </header>
    
        
);

Header.propTypes = {
    headerTitle: PropTypes.string.isRequired
}

   


export default Header;