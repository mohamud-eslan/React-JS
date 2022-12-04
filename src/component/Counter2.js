import React, { useState } from 'react'

function Counter2() {
    const [count, setCount] = useState(4);

     const decrementCount = ()=>{
      setCount(count - 1)
    }
     const incrementCount = ()=>{
      setCount(count + 1)
    }
  return (
    <div>
         <h1>welcome to my counter Ap</h1>
      <h2>the count is:{count}</h2>
      <button onClick={decrementCount}>-</button> 
       <span>{count}</span>
        <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default Counter2