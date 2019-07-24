import React from 'react';
import PropTypes from 'prop-types';

const MenuTable = props => (

    <tr>
    <td>{props.name} <span className="price">{props.price}</span></td>
    <td><button className="btn addremove admenu_button" onClick = { () => props.postItem(props.id) }> Post </button></td>
    </tr>
                   
);

MenuTable.propTypes = {
    id:PropTypes.string.isRequired,
    index:PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    postItem: PropTypes.func.isRequired
};


export default MenuTable;