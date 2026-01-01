import React, { useState } from 'react'
import  TodoInput  from './components/TodoInput'
import  TodoList  from './components/TodoList'

 const App = () => {


const [addInput, setAddInput] = useState("")
const [todos, setTodos] = useState([])
const [editTodo, setEditTodo] = useState(null)
const [editText, setEditText] = useState("")

const startEditing = (id, currText)=>{
  setEditTodo(id)
  setEditText(currText)
}

const saveEdit = (id)=>{
  setTodos((currTodo)=>
   currTodo.map((todo)=>
   todo.id === id ? {...todo, text : editText} : todo
  )
  )
  setEditTodo(null)
}


const cancelEdit = ()=>{
  setEditTodo(null)
  setEditText("")
}



const addInputOnSearch = (e)=>{
  setAddInput(e.target.value)
}
 
const addTodo = ()=>{
  const newTodo = {
    id: Date.now(),
      text: addInput,
      completed: false
  }
  setTodos([...todos, newTodo])
  setAddInput("")
}  

const todoCompleted = (id)=>{
  setTodos((currTodo)=>
   currTodo.map((todo)=>
   todo.id === id ? {...todo, completed : !todo.completed} : todo
  )
  )
}

const handleKey = (e)=>{
  if(e.key === "Enter"){
    addTodo()
  }
}

const handleKeyForEdit = (e, id)=>{
  if(e.key === "Enter"){
    saveEdit(id)
  }
  }

const deleteTheTodo = (id)=>{
  setTodos((currTodo)=>
   currTodo.filter((todo)=>
   todo.id !== id
  )
  )
}
    
  return (
   < div>
   <TodoInput addInputOnSearch = {addInputOnSearch} value = {addInput} addTodo = {addTodo} handleKey = {handleKey}  />
   <TodoList todos = {todos} todoCompleted = {todoCompleted} deleteTheTodo = {deleteTheTodo} startEditing = {startEditing} editTodo = {editTodo} setEditText = {setEditText} saveEdit = {saveEdit} cancelEdit = {cancelEdit} value = {editText} handleKeyForEdit = {handleKeyForEdit}/>
    </div>
  )
}
export default App
