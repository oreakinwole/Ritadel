import React from 'react';
import PropTypes from 'prop-types';


const MenuTable = props => (

    <tr>
    <td>{ props.name } <span className="price">{ props.price } </span></td>
    <td> <button className="btn addremove" onClick = { () => props.sendToOrderState(props.id, props.name, props.price) }> Add </button> </td>
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