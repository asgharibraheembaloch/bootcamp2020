import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
    //const [counter, setCounter] = useState(0);
    const [value, setValue] = useState(0);
    const dispatch = useDispatch()
    const counter = useSelector((state)=>{
        return state.counter
        }
    )
  return (
    <div>Counter: {counter}
    <br/>
    <br/>
        <di>
            <button onClick={()=>{
                //setCounter(counter+1);
                dispatch({type:"INCREMENT"})
            }}>increament</button>
        </di>
        <br/>
        <br/>
        <di>
            <button onClick={()=>{
                //setCounter(counter-1);
                dispatch({type:"DECREMENT"})
            }}>decreament</button>
        </di>
        <br/>
        <br/>
        <div>
            <input type="text" onChange={(e)=>{
                setValue(e.target.value)
            }} />
            <br/>
            <br/>
            <button onClick={()=>{
                //setCounter(counter+Number(value))
                dispatch({type:"INCREMENT_BY_AMOUNT", payload: Number(value)})
            }}>increament By Value</button>
        </div>
    </div>
  )
}

export default Counter