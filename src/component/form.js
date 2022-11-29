import {useState} from "react";
//import Form from "./component/Form"
const Form = () =>{
    const [inputData, setInputData] = useState({});
    console.log(inputData);

    return (
        <div className="myDiv">
            <input inputData ={inputData} name="name" setInputData={setInputData} ></input>
            <input inputData ={inputData} name="location" setInputData={setInputData} ></input>
            <input inputData ={inputData} name="photo" setInputData={setInputData} ></input>
            <button onClick={() =>setInputData({}) }>submit</button>
        </div>
    )

}


export default Form;