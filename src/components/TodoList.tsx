type TodoListProps = {
    todos: any[];
};

function ToDoList({ todos }: TodoListProps) {
    if (!todos || todos.length === 0) {
        return <div>No tasks added yet</div>
    }

    return (
        <div>
            <h4>Here is the tasks list</h4>

            <table border={1} style={{ borderCollapse: "collapse", width: "100%" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td style={{ padding: "8px" }}>{todo.id}</td>
                            <td style={{ padding: "8px" }}>{todo.text}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ToDoList;