import React from 'react'
import Child from './Child'

function Parent({value}) {
  return (
    <div>
        <h1>this is parent component and this value {value} is passed to child component</h1>
        <Child value={value}></Child>
    </div>
  )
}

export default Parent