import { useCallback, useEffect, useState } from 'react'
import './App.css'
import TodoList from './components/todolist'
function App() {
  const [titleName, setTitleName] = useState("")
  const [todolist, setTodoList] = useState([])
  const [id, setId] = useState(0)
  const changeTextInput = useCallback((e) => {
    setTitleName(e.target.value)
  }, []);

  const AddToDoList = useCallback((e) => {
    setId(id + 1)
    const isComplete = false
    setTodoList([...todolist, { id: id, title: titleName, state: isComplete }])
    setTitleName("")
  }, [titleName, todolist, id]);

  const handleClick = useCallback((idx) => {
    const newTodoList = [...todolist]
    newTodoList[idx] = {
      ...newTodoList[idx],
      state: !newTodoList[idx].state
    }
    setTodoList(newTodoList)

  }, [todolist]);

  return (
    <div className="container">
      <div className="formTodo">
        <input value={titleName} name="titleName" placeholder='Tiêu đề' onChange={changeTextInput}></input>
        <button onClick={AddToDoList}>Thêm</button>
      </div>
      <ul className='list-todo'>
        <TodoList onTodoClick={handleClick} todoList={todolist}></TodoList>
      </ul>
    </div>
  )
}
export default App
