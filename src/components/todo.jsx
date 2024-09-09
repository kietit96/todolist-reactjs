
function Todo({ todo, onTodoClick }) {
    return (
        <li className={todo.state ? "complete" : ""}><span>{todo.title}</span> <button type="button" onClick={() => onTodoClick(todo.id)}>v</button></li>
    )
}
export default Todo