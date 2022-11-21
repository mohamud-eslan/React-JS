import react, {useState} from 'react';
import './App.css';
const User = (props) =>{
  const [count, setCount] = useState(4)
  function decrementCount(){
    setCount(preCount => preCount - 1)
  }
  function incrementCount(){
    setCount(preCount => preCount + 1)
  }
  return (
   
    <div>
       <>
       <button className='buttom' onClick = {decrementCount}>-</button>
       <span className='span'>{count}</span>
       <button className='buttom' onClick ={incrementCount}>+</button>
    </>
      <h1 className='name'>{props.name}</h1>
      <h1 className='age'>{props.age}</h1>
      <h1 className='email'>{props.email}</h1>

    </div>
  )
}

function App() {
  return (
    <div className="App">
       <User name = "mohmed" age={35} email= "mohm@gmail.com" />
       <User name = "ali" age={20} email="ali@gmail.com"/>
       <User name = "alan" age={25} email="alan@gmail.com"/>
       </div>
  );
 
}


export default App;
