
import Todo from "./todo"

function TodoList({ todoList, onTodoClick }) {
    return (
        <>
            {
                todoList.map((todo) => (
                    <Todo onTodoClick={onTodoClick} key={todo.id} todo={todo} />
                ))
            }
        </>
    )
}
export default TodoList