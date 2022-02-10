import React, { useReducer } from 'react'
import numberReducer from './numberReducer'


function Child2() {
    let [state, dispatch] = useReducer(numberReducer, 52)
  return (
    <div>reducer initial value is {state}
    <button onClick={()=>{dispatch({type: 'INCREMENT'})}}>Increase the value</button>
    <button onClick={()=>{dispatch({type: 'DECREMENT'})}}>Decrease the value</button>
    </div>
    
  )
}

export default Child2