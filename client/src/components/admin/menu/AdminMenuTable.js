import React from 'react';
import PropTypes from 'prop-types';

const MenuTable = ({id, name, price, postItem, posted}) => (
    <>
        <div className="nameprice">
            <h2> {name} </h2>
            <p> {price} </p>
        </div>

         <div> <button onClick = { () => postItem(id) } > {posted ? 'Posted' : 'Post'} </button> </div>
    </>                  
);

MenuTable.propTypes = {
    id:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    postItem: PropTypes.func.isRequired,
    posted: PropTypes.bool.isRequired,
};


export default MenuTable;