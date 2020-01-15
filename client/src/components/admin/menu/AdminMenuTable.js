import React from 'react';
import PropTypes from 'prop-types';

const MenuTable = ({id, name, price, postItem, removeItem, isPosted}) => (
    <>
        <div className="nameprice">
            <h2> {name} </h2>
            <p> {price} </p>
        </div>

         <div> <button onClick = { () => postItem(id) } > { isPosted ? 'Posted' : 'Post' } </button> </div>
    </>                  
);

MenuTable.propTypes = {
    id:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    postItem: PropTypes.func.isRequired,
    // removeItem: PropTypes.func.isRequired,
    isPosted: PropTypes.bool
};


export default MenuTable;