import './App.css'
import TodoList from './components/TodoList';

function App() {
  const todos = [
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
  ];

  return (
    <>
      <div>
        <h1>Todo App</h1>
        <TodoList todos={todos} />
      </div>
    </>
  )
}

export default App