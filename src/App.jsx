import React, { useState } from 'react'
import  TodoInput  from './components/TodoInput'
import  TodoList  from './components/TodoList'

 const App = () => {

  const [addInput, setAddInput] = useState("")
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)
  const [editText, setEditText] = useState("")

  const addInputOnSearch = (e)=> {

    setAddInput(e.target.value)
  }

  const addTodos = ()=>{
    const newTodo = {
      id : Date.now(),
      text: addInput,
      completed : false
    }
    setTodos([...todos, newTodo])
    setAddInput("")
  }

  const handleKey = (e)=>{
    if(e.key === "Enter"){
      addTodos()
    }
  }

  const todoCompleted = (id)=>{
    setTodos((currTodo)=>
     currTodo.map((todo)=>
     todo.id === id ? {...todo, completed: !todo.completed} : todo
    )
    )
  }
 

  const deleteTheTodo = (id)=>{
    setTodos((currTodo)=>
     currTodo.filter((todo)=>
    todo.id !== id
     )
    )
  }

  const startEditing = (id, currText)=>{
    setEditTodo(id)
    setEditText(currText)
  }

  const saveEdit = (id) =>{
    setTodos((currTodo)=>
   currTodo.map((todo)=>
   todo.id === id ? {...todo, text: editText} : todo
  )
  )
  setEditTodo(null)
  setEditText("")
  }
    
  return (
    <div>
      <TodoInput addInputOnSearch = {addInputOnSearch} value = {addInput} addTodos = {addTodos} handleKey = {handleKey} />
      <TodoList todos = {todos} todoCompleted = {todoCompleted} deleteTheTodo = {deleteTheTodo} saveEdit = {saveEdit} startEditing = {startEditing} value = {editText} setEditText = {setEditText} editTodo = {editTodo} />
    </div>
  )
}
export default App
