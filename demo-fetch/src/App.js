import './App.css';
import React, { useEffect, useState } from 'react'

function App() {
  const [todo, setTodo] = useState({});
  const [isFetching, setFetaching] = useState(true)
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      let data = await response.json();
      console.log(data)
      setTodo(data);
      setFetaching(false)
    }
    getData();
  }, []);
  if(isFetching){
    return <div>
      Data is loading ⏳⏳⏳⏳...please wait
    </div>
  }
  return (
    <div>
      <span>Title: {todo.title}</span>
    </div>
  );
}

export default App;
