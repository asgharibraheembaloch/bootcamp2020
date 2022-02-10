import { useContext } from "react";
import Parent from "./Parent";
import ValueContext from "./ValueContext";

function App() {
  let value = useContext(ValueContext)
  return (
    <ValueContext.Provider value={value}>
      <div>
        <Parent></Parent>
      </div>
    </ValueContext.Provider>
  );
}

export default App;
