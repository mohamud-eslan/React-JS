import React from 'react';
import './App.css';
import Counter from './component/Counter';
import Counter2 from './component/Counter2';
import DataBase from './component/DataBase';
import FocusInput from './component/FocusInput';
import Greet from './component/Greet';
import HandleClick from './component/HandleClick';
import UseCounter from './component/UseCounter';
import UseCounterThree from './component/UseCounterThree';
//import Input from './component/Input';

// const initialValues = {
//   name: '',
//   location: '',
//   photo: ''

// }

function App() {
  //

  // const [formData, setFormData] = useState({initialValues })
  // const handleChange = (e) =>{
  //   setFormData({...formData, [e?.target.name]: e?.target?.value});
  // }

  // const [isCircle, setIsCircle] = useState(true)
 // const [name, setName] = useState('');
 // const inputRef = useRef()

 // function focus(){
//    inputRef.current.focus()
 // }
  
 
   return (
    
    <div className="App">
      <DataBase />
      {/* <HandleClick />
      <Counter2 />
      <Greet name="mohamud" heroName="khadar">
        <p>this the children</p>
      </Greet> */}
      {/* <FocusInput /> */}
      {/* <UseCounterThree /> */}
      {/* <UseCounter /> */}
      {/* <Counter /> */}
      {/* <>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
      <div>my name is {name}</div>
      <button onClick={focus}>focus</button>
      </> */}

      {/* <div className={isCircle ? "circle" : "square"}>
      <button onClick={() => setIsCircle(!isCircle)}>change the shape</button>
      </div> */}

     

      {/* <Input formData={formData}
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
      <button onClick={() => setFormData(initialValues)}>clear</button> */}
      </div>
       
        
  );
}


export default App;
