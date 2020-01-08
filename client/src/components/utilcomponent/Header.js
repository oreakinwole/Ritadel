import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logout from '../../assets/img/icons/logout.png';
import nextIcon from '../../assets/img/icons/front-arrow.png';

const HeaderWrapperDiv = styled.header`
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: #d14c3d;
    color: #fff;
    padding: 10px 0;
    
    h1{
        letter-spacing: .1em;
    }

    img{
        cursor: pointer;
        width: 2em;
    }
`;

const Header = props => (

    <HeaderWrapperDiv>
        <div>
            <img src={logout} alt="log out"
            onClick = { 
                () => {

                sessionStorage.removeItem('ritadeltoken');
                
                window.location.assign("/");
                
                }
            } 
            
            />
        </div>
        
            {
            props.headerTitle && <div> <h1> { props.headerTitle } </h1> </div>
            }
        { props.nexticon &&
        <div>
        <Link to={props.link}> <img src={nextIcon} alt="next" onClick={ props.actionFunction } /> </Link>
        </div>
        }
           
    </HeaderWrapperDiv>
    
        
);

Header.propTypes = {
    actionFunction: PropTypes.func.isRequired,
    headerTitle: PropTypes.string.isRequired,
    nexticon:  PropTypes.bool.isRequired
}

export default Header;