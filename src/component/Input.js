import React from "react";

function Input({name, handleChange, placeholder, type, formData}){
    console.log(formData[name]);
    return (
          <Input 
          name={name}
          onChange={handleChange}
          playsholder={placeholder}
          type={type}
          />
    )

}


export default Input;