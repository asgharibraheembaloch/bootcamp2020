import React, { useContext } from 'react'
import ValueContext from './ValueContext'

function Child() {
  let value = useContext(ValueContext);
  let updateState = value[1]
  return (
    <div>
      this is child component, and this value {value} value come from context
      <button
        onClick={() => {
          updateState(++value[0]);
        }}
      >
        update the value
      </button>
    </div>
  );
}

export default Child