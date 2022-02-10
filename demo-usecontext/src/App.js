import React, { useState } from 'react'
import Parent from "./Parent";
import ValueContext from "./ValueContext";


function App() {
  let value = useState(48)
  return (
    <ValueContext.Provider value={value}>
      <div>
        <Parent></Parent>
      </div>
    </ValueContext.Provider>
  );
}

export default App;
