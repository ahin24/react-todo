import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Hello world</h1>
      </div>
    </>
  )
}

export default App