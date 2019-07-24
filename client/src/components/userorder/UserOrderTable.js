import React from 'react';
import PropTypes from 'prop-types';

const OrderTable = props => (

            <tr>
            <td>{props.name}<span onClick = { () => props.removeOrder(props.index) }>remove</span></td>
            <td>{ props.price } </td>
            </tr>
          
           
);

OrderTable.propTypes = {
    index:PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default OrderTable;