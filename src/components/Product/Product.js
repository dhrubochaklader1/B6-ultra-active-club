import React from 'react';
import './Product.css';

const Product = ({ product, handleButton }) => {
    // console.log(product)
    const { img, name, TimeRequired } = product;
    return (
        <div className='single-product'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>{TimeRequired} M</p>
            <button onClick={() => handleButton(product)}>Add to list</button>
        </div>
    );
};

export default Product;