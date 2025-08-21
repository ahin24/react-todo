export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// pure function to add a task and return updated todos
export function addTask(todos: Todo[], text: string): Todo[] {
    console.log("Adding task 111:", text);
  const newTodo: Todo = {
    id: todos.length + 1,
    text,
    completed: false,
  };
  return [...todos, newTodo];
}