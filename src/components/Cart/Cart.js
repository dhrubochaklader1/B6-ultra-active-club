import React, { useEffect, useState } from 'react';
import { addToDb, getTime } from '../../utilities/fakeDb';
import './Cart.css';

const Cart = ({ cart }) => {
    const [per, setPer] = useState("");
    let initialTime = 0;
    for (const single of cart) {
        initialTime = initialTime + single.TimeRequired;
    }

    useEffect(() => {
        const findValue = getTime();
        for (const name in findValue) {
            setPer(findValue[name]);
            console.log(per);
        }
    }, []);

    const Add = (name, breaks) => {
        setPer(breaks);
        addToDb(name, breaks)
    }

    return (
        <div className='cart'>
            <h1>Name - Dhrubo Chaklader</h1>
            <p>profession - Web Developer</p>
            <p>Add A Break</p>
            <div className='partial'>
                <button onClick={() => Add("one", 10)}>10</button>
                <button onClick={() => Add("two", 20)}>20</button>
                <button onClick={() => Add("three", 30)}>30</button>
                <button onClick={() => Add("four", 40)}>40</button>
            </div>
            <p>Details Time : {initialTime + "M"}</p>
            <p>Break Time : {per + "M"}</p>
        </div >
    );
};

export default Cart;