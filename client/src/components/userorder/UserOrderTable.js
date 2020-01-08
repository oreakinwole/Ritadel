import React from 'react';
import PropTypes from 'prop-types';

const OrderTable = ({index, name, price}) => (
    <>
    <div className="nameprice">
        <h3> Jollof & meat </h3>
        <p> remove </p>
    </div>

    <div>
        
    </div>
</>
);

OrderTable.propTypes = {
    index:PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default OrderTable;