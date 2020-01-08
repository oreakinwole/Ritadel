import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import trashIcon from '../../assets/img/icons/trash.png';

const BottomNav = styled.section`
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: #450b0b;
    color: #fff;
    padding: 10px 0;
    align-self: baseline;
    position: fixed;
    width: 600px;
    bottom: 0;

    div{

    }
    h1{
        letter-spacing: .1em;
    }

    img{
        width: 1.5em;
    }
    .trash{
        width: 1em;
    }
    a{
        color: inherit;
        text-decoration: none;
    }
`;


const Nav = props => (
 
<BottomNav>
    
    <div>
        <Link to={props.firstIconLink}> <img src={props.firstIcon} alt={props.firstIconalt}/></Link>
    </div>

    <div>
        <img className= "trash" src={trashIcon} alt="trash" />
    </div>

    <h2>{props.title} {props.allOrdersLength && props.allOrdersLength} </h2>

    <h3> {props.username} </h3>
    
</BottomNav>
   
);

Nav.propTypes = {
    allOrdersLength: PropTypes.number,
    username: PropTypes.string,
    title: PropTypes.string,
    firstIcon:PropTypes.any,
    firstIconalt:PropTypes.string
};
   


export default Nav;