import { useState } from 'react'
import './App.css'
import TodoList from './components/todolist'
function App() {
  const [titleName, setTitleName] = useState("")
  const [todolist, setTodoList] = useState([])
  const changeTextInput = (e) => {
    setTitleName(e.target.value)
  }
  const AddToDoList = () => {
    setTodoList([...todolist, titleName])
    setTitleName("")
  }
  return (
    <div className="container">
      <div className="formTodo">
        <input value={titleName} name="titleName" placeholder='Tiêu đề' onChange={changeTextInput}></input>
        <button onClick={AddToDoList}>Thêm</button>
      </div>
      <ul className='list-todo'>
        <TodoList todoList={todolist}></TodoList>
      </ul>
    </div>
  )
}
export default App
