import { useId } from "react"
import Todo from "./todo"

export default function TodoList({ todoList }) {
    return (
        <>
            {
                todoList.map((val,key) => (
                    <Todo key={key} todo={val} />
                ))
            }
        </>
    )
}