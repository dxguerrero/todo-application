import { useState, useEffect, useDebugValue } from 'react'
import './App.css'
import ListItem from "./components/ListItem"

function App() {
  const [data, setData] = useState([]);
  const [isTodoListVisible, setIsTodoListVisible] = useState(true);

  async function fetchData() {
    const response = await fetch(`http://localhost:4000/api/todos`)
    const fetchedData = await response.json();
    console.log(fetchedData)
    setData(fetchedData);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <h1>Hello World</h1>

      {isTodoListVisible && (
        <ol>
          {data.map((todo, idx) => (
            <ListItem 
              key={idx}
              title={todo.title}
              body={todo.body}
            />
          ))}
        </ol>
      )}
    </>
  )
}

export default App
