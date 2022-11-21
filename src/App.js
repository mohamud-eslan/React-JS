
import './App.css';
const User = (props) =>{
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>

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
