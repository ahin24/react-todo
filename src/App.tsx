import { useState } from 'react';
import './App.css'
import TodoList from './components/TodoList';
import { addTask, type Todo } from './modules/AddTask/addTask';
import AddTask from './components/AddTask';

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  // call the external function
  const handleAddTask = (text: string) => {
    console.log("Adding task:",text)
    setTodos(addTask(todos, text));
  };

  return (
    <>
      <div>
        <h1>Todo App</h1>
        <AddTask onAdd={handleAddTask} />
        <TodoList todos={todos} />
      </div>
    </>
  )
}

export default App;