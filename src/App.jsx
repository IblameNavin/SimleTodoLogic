import React, {useState} from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {

  const [addInput, setAddInput] = useState("")
  const [todos, setTodos] = useState([])



  


  
  // const cancelEdit = () =>{
  //   setEditTodoId(null)
  //   setEditingText("")
  // }


  // Storing the input Value
   const addInputOnSearch = (e) =>{
    setAddInput(e.target.value)
   }
   

   // Adding the todo
   const addTodo = ()=>{
    if(!addInput.trim()) return
    const newTodo = {
      id: Date.now(),
      text: addInput,
      completed: false
    }
    setTodos((prev)=> [...prev, newTodo])
     setAddInput("")
   }


    // Check Marking the todo that are completed
  const todoCompleted = (id)=>{
     setTodos((currTodo)=>
     currTodo.map((todo)=>
     todo.id === id ? {...todo, completed : !todo.completed } : todo
    )
    )
  }


  // Handling the "Enter" key
  const handleKeyPress = (e)=>{
    if(e.key === "Enter"){
       addTodo()
    }
  }
 

  // Deleting the Todo
  const deleteTheTodo = (id)=>{
    setTodos((currTodo)=>
    currTodo.filter((todo)=>
      todo.id !== id
    )
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Todo App</h1>
      <TodoInput addInputOnSearch = {addInputOnSearch} addTodo = {addTodo} value = {addInput} handleKeyPress = {handleKeyPress} />
      <TodoList  todos = {todos} todoCompleted = {todoCompleted} deleteTheTodo = {deleteTheTodo}  
  />
    </div>
  );
};

export default App;
