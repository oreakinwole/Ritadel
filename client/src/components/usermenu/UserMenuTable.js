import React from 'react';
import PropTypes from 'prop-types';
import naira from '../../img/naira.png';


const MenuTable = props => (

    <tr>
    <td className="user_menu_chars umchar"><div className="user_menu_item" >{ props.name }</div><span className="price"><img src={naira} alt="naira" />{ props.price } </span></td>
    <td className="user_menu_chars"> <button className="usermenu_addbtn" onClick = { () => props.sendToOrderState(props.id, props.name, props.price) }> Add </button> </td>
    </tr>

);

MenuTable.propTypes = {
    index: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    sendToOrderState: PropTypes.func.isRequired
};


export default MenuTable;