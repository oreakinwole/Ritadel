import React from 'react';
import PropTypes from 'prop-types';
import add from '../../assets/img/icons/add.png';
import { MealItemDiv } from './stlye';

const MenuTable = ({ name, price, url, index, id, sendToOrderState }) => (
    <MealItemDiv>
            <div className= "food-details">
                <div>
                <img src={url} alt={url.split('App/')[1]} />
                </div>

                <div className="nameprice">
                    <h3> {name} </h3>
                    <p> {price} </p>
                </div>
            </div>
           

            <div className= "add-div">
                <img src={add} className="add-icon" alt="add" onClick ={ ()=> sendToOrderState(id)} />
            </div>
    </MealItemDiv>

);

MenuTable.propTypes = {
    index: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    url: PropTypes.string,
    sendToOrderState: PropTypes.func.isRequired
};


export default MenuTable;