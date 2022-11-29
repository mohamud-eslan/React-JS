import {useState} from 'react';
//import Form from './component/Form';
import './App.css';


function App() {
  const [count, setCount] = useState(0);

  
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>
        increment your : {count}
        </button>
        <button onClick={() => setCount(count - 1)}>
        decrement your : {count}
        </button>
       </div>
  );
}


export default App;
