import {useState} from 'react';
import './App.css';
import Input from './component/Input';

const initialValues = {
  name: '',
  location: '',
  photo: ''

}

function App() {
  // const [count, setCount] = useState(4);
  //  const decrementCount = ()=>{
  //   setCount(count - 1)
  // }
  //  const incrementCount = ()=>{
  //   setCount(count + 1)
  // }
  const [formData, setFormData] = useState({initialValues })
  const handleChange = (e) =>{
    setFormData({...formData, [e?.target.name]: e?.target?.value});
  }
 
  return (
    
    <div className="App">
      {/* <h1>welcome to my counter Ap</h1>
      <h2>the count is:{count}</h2>
      <button onClick={decrementCount}>-</button> 
       <span>{count}</span>
        <button onClick={incrementCount}>+</button> */}
      <Input formData={formData}
      handleChange={handleChange}
      name="name"
      type="text"
      playsholder="enter your name"
      />
      <Input formData={formData}
      handleChange={handleChange}
      name="location"
      type="text"
      playsholder="enter your location"
      />
      <Input formData={formData}
      handleChange={handleChange}
      name="photo"
      type="file"
      playsholder="enter your photo"
      />
      <button onClick={() => setFormData(initialValues)}>clear</button>
      </div>
       
        
  );
}


export default App;
