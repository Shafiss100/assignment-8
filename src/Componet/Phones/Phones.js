import React from 'react';
import './Phones.css'

const Phones = (data ) => {
    
    
    const { id, img , name , price} = data.data;
    const addToCard = (id) => {
        console.log(id)
      };
    
    return (
        <div className='carts'>
            <div className='cart'>
                <img src={img} alt="" />
                <div>
                <h2>Name = {name}</h2>
                <h1>Price = {price}</h1>
                <button onClick={() => addToCard(id)}>Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default Phones;