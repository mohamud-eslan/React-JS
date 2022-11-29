import {useState} from 'react';
//import Form from './component/Form';
import './App.css';

function App() {
  const [count, setCount] = useState(4);
   const decrementCount = ()=>{
    setCount(count - 1)
  }
   const incrementCount = ()=>{
    setCount(count + 1)
  }
  return (
    <div className="App">
      <h1>welcome to my counter Ap</h1>
      <h2>the count is:{count}</h2>
      <button onClick={decrementCount}>-</button> 
       <span>{count}</span>
        <button onClick={incrementCount}>+</button>
        
       </div>
  );
}


export default App;
