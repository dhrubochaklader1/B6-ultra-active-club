import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalkingArrowRight } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleButton = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div >
            <FontAwesomeIcon className='center' icon={faPersonWalkingArrowRight}></FontAwesomeIcon>
            <p>Cricket Exercise Time Table</p>
            <div className='main-part'>
                <div className='main-single-prodcut'>
                    {
                        products.map(product => <Product handleButton={handleButton} key={product.id} product={product} ></Product>)
                    }
                </div>
                <div className='main-cart'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Products;