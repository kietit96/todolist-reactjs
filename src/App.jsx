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
    setTodoList([...todolist, { id: id, title: titleName, state: false, filtered: false }])
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

  const btnFilter = useCallback((filterType) => {
    const newTodoList = [...todolist]
    if (filterType === "all") {
      newTodoList.map((val) => val.filtered = false
      )
    }
    else if (filterType === "completed") {
      newTodoList.map((val) => {
        if (val.state === false) {
          return val.filtered = true
        } 
        return val.filtered = false
      })
    }
    else {
      newTodoList.map((val) => {
        if (val.state === true) {
          return val.filtered = true
        }
        return val.filtered = false
      })
    }
    setTodoList(newTodoList)
  }, [todolist])
  useEffect(() => {
  }, [todolist])
  return (
    <div className="container">
      <div className="formTodo">
        <input value={titleName} name="titleName" placeholder='Tiêu đề' onChange={changeTextInput}></input>
        <button onClick={AddToDoList}>Thêm</button>
      </div>
      <div className="filter-box">
        <button onClick={() => btnFilter("all")}>show all</button>
        <button onClick={() => btnFilter("completed")}>show completed</button>
        <button onClick={() => btnFilter("not-completed")}>show not completeted</button>
      </div>
      <ul className='list-todo'>
        <TodoList onTodoClick={handleClick} todoList={todolist}></TodoList>
      </ul>
    </div>
  )
}
export default App
