import React, { useState } from 'react'
import Child from './Child'

function Parent({value}) {
    let [num, setNum] = useState(45)
  return (
    <div>
        <h1>this is parent component and this value {num} is passed to child component</h1>
        <Child value={num}></Child>
        <button onClick={()=>{setNum(++num)}}>udpate the value number</button>
    </div>
  )
}

export default Parent