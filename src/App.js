import react, {useState} from 'react';
import Form from './component/Form';
import './App.css';


function App() {
  const [inputForm, setInputForm] =useState({});
  
  return (
    <div className="App">
      <Form inputForm={inputForm} name='name' setInputForm={setInputForm} />
      <Form inputForm={inputForm} name='location' setInputForm={setInputForm} />
      <Form isFile inputForm={inputForm} name='image' setInputForm={setInputForm} />
      <button onClick={() => setInputForm({})}>Reset</button>
       
       </div>
  );
}


export default App;
