import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../store/action';

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
                dispatch(increment())
            }}>increment</button>
        </di>
        <br/>
        <br/>
        <di>
            <button onClick={()=>{
                //setCounter(counter-1);
                dispatch(decrement())
            }}>decrement</button>
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
                dispatch(incrementByAmount(Number(value)))
            }}>increment By Value</button>
        </div>
    </div>
  )
}

export default Counter