import React, { useContext } from 'react'
import ValueContext from './ValueContext'

function Child() {
  let value = useContext(ValueContext);
  return (
    <div>this is child component, and this value {value} value come from context providor component </div>
  )
}

export default Child