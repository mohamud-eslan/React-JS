import React, { useMemo, useState } from 'react'

function Counter() {
    const [counterOne, setCountOne] = useState(0)
    const [counterTwo, setCountTwo] = useState(0)

    const incrementOne = () => {
        setCountOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCountTwo(counterTwo + 1)
    }
   
    const isEven =  useMemo( () => {
        let i = 0
        while(i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])
  return (
    <div>
        <div>
            <button onClick={incrementOne}>count one {counterOne}</button>
            <span>{isEven ? 'even' : 'odd'}</span>
        </div>
        <div>
            <button onClick={incrementTwo}>count Two {counterTwo}</button>
        </div>


    </div>
  )
}

export default Counter