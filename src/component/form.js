import React from "react";


function Form({inputForm, setInputForm, name}){

    return (
        <form name={name} value={inputForm[name]} onChange={(e) => setInputForm({name: e.target.value})}></form>
    );
}

export default Form;