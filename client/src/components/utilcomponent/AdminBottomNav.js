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
    @media (max-width: 768px) {
        width: 100%;
    }

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


const Nav = props => { 
const totalMenuItems = props.theMenu.length;
    
return (
    <BottomNav>
        <div>
            <Link to={props.firstIconLink}> <img src={props.firstIcon} alt={props.firstIconalt}/></Link>
        </div>
        
        <div onClick = { props.clearEvery }>
        <img className= "trash" src={trashIcon} alt="trash" />
        </div>

        <h2>Items:{ totalMenuItems } </h2>

        <h3> {props.username} </h3>

    </BottomNav>
)
}

Nav.propTypes = {
    theMenu: PropTypes.array.isRequired,
    clearEvery: PropTypes.func.isRequired
};

export default Nav;