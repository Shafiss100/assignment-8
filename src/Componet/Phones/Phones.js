import React from 'react';
import './Phones.css';
import {  ShoppingCartIcon } from '@heroicons/react/solid';

const Phones = (data ) => {
    // console.log(data.data)
    const {addToCard} = data;
    const { id, img , name , price} = data.data;
    
    
    return (
        <div className='carts'>
            <div className='cart'>
                <img src={img} alt="" />
                <div>
                <h2>Name = {name}</h2>
                <h1>Price = {price}</h1>
                <button className='button' onClick={() => addToCard(data.data)}>Add to card <ShoppingCartIcon className="shop-icon"/></button>
                </div>
            </div>
        </div>
    );
};

export default Phones;

