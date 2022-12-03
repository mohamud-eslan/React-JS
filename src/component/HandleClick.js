import React, {useState} from 'react'

function HandleClick() {
    //let name = 'mohamud'
    const [name, setName] = useState('mohamud')
    const [age, setAge] = useState(40)

    const handle2 = () =>{
      setName('khalif')
      setAge(35)
    }
  return (
    <div>
        <h2>home page</h2>
        <p>{name} is {age} years old</p>
        <button onClick={handle2}>click</button>
    </div>
  )
}

export default HandleClick