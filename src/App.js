
import './App.css';
import './main.css'
import { useEffect, useState } from 'react';
import Phones from './Componet/Phones/Phones';

function App() {
  
   const [phones , setPhone] = useState([]);
   useEffect(() => {
     fetch('data.json').then(res => res.json()).then(data => {
       setPhone(data)
      });
   },[])
  return (
    <div>
      <h1>Phone list</h1>
      <div className='container'>
      <div className="carts">
      {
        phones.map(phone => <Phones key = {phone.id} data = {phone} ></Phones>)
      }
      </div>
      <div className='cart'>
        <h1>Carts</h1>
      </div>
    </div>
    </div>

  );
}

export default App;
