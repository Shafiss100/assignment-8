import React from 'react';
import './Phones.css'

const Phones = (props) => {
    const card = () =>{
        console.log("clicked")
      }

    const {id , img , name , price} = props.data;
    return (
        <div className='carts'>
            <div className='cart'>
                <img src={img} alt="" />
                <div>
                <h2>Name = {name}</h2>
                <h1>Price = {price}</h1>
                <button onClick={card}>Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default Phones;