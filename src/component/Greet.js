import React from 'react'

function Greet(props) {
    console.log(props);
  return (
    <div>
        <h2>hello {props.name} also {props.heroName}</h2>
        {props.children}
    </div>
  )
}

export default Greet