import React from 'react'
import Child from './Child'

function Parent() {
  return (
    <div>
        <h1>this is parent component and we ommit the value and passed context instead to child component  is passed to child component</h1>
        <Child></Child>
    </div>
  )
}

export default Parent