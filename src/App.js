
import './App.css';
import './main.css'
import { useEffect, useState } from 'react';
import Phones from './Componet/Phones/Phones';

function App() {
   const [phones , setPhone] = useState([]);
   const [cart , setCart] = useState([]);

   const addToCard = (name) => {
     const newName = [...cart, name]
    setCart(newName);
  };

  const remove = () => {
    const Carts = [];
    setCart(Carts)
  }
  
   
   
   useEffect(() => {
     fetch('data.json').then(res => res.json()).then(data => {
       setPhone(data)
      });
   },[]);
  return (
    <div>
      <h1>Phone list</h1>
      <div className='container'>
      <div className="carts">
      {
        phones.map(phone => <Phones 
          key = {phone.id} 
          data = {phone}
          addToCard = {addToCard}   />
          )
      }
      
      </div>
      <div className='cart'>
        <h1>Carts</h1>
        {
          cart.map(phone => <h4>Name: {phone.name}</h4>)
        }
        <button onClick={remove}>Remove all</button>
      </div>
      
      
    </div>
    <div>
    <h1>How dose javascript work?</h1>
      <h3>javascript programming language is a scripting language. It read the code form up to down. If any variable decleard in the buttom side and use it for any action in the top, that will throw an error.</h3>
      <h1>How react usestate works?</h1>
      <h3>The React useState function thats help access to track state in a function component. In usestate the first is vairiable and second is function... and usestate valu is need to a default value</h3>
    </div>
    </div>

  );
}


export default App;
