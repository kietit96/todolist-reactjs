
function Todo({ todo, onTodoClick }) {
    return (
        <li className={[todo.filtered ? "filtered" : "", todo.state ? "complete" : ""].join(" ")}><span>{todo.title}</span> <button type="button" onClick={() => onTodoClick(todo.id)}>v</button></li>
    )
}
export default Todo