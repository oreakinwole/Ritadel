import React from 'react';
import PropTypes from 'prop-types';

const OrderTable = ({ name, price }) => (
    <>
        <div className="nameprice">
            <h2> {name} </h2>
            <p> Remove </p>
        </div>

            <h2> {price} </h2>
    </>
);

OrderTable.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default OrderTable;