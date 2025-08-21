# State
What is State?

State = memory inside a component.

It stores values that can change over time and cause the component to re-render when updated.

In React, we use the useState hook to create state.

Use Case in Todo App

In App.jsx, we need to remember the list of tasks a user adds.
Example:

const [todos, setTodos] = useState([]);


todos → current value (array of tasks).

setTodos → function to update that value.

Whenever setTodos is called → React redraws the UI with the new list.

👉 Without state, we couldn’t add/remove tasks dynamically.

const [stateVariable, setStateVariable] = useState(initialValue);



# Hooks
What are Hooks?

Hooks are special functions that let you use React features (like state, lifecycle, context) inside functional components.

They always start with use....

Use Case in Todo App

We’ll use:

useState → to store todos.

Later (if needed): useEffect → for saving to local storage or fetching from an API.

Example:

const [todos, setTodos] = useState([]);


Here, useState([]) initializes the state as an empty array.

# Props
What are Props?

Props = inputs to a component (like arguments to a function).

They let us pass data and functions from a parent component down to children.

Use Case in Todo App

App.jsx (parent) → passes:

todos array to TodoList.

addTodo function to TodoForm.

toggleTodo and deleteTodo functions to TodoItem.

Example:

<TodoForm addTodo={addTodo} />
<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />


Then inside child components:

TodoForm calls addTodo(text) when user submits.

TodoList uses todos.map(...).

TodoItem calls toggleTodo(id) or deleteTodo(id) when buttons are clicked.

👉 Props = data down (from parent to child).
👉 State = data stored and controlled at the top (App).
👉 Hooks = tools to manage state/logic inside functional components.