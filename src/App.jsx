import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [addInput, setAddInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addInputOnSearch = (e) => {
    setAddInput(e.target.value);
  };

  const addTodos = () => {
    const trimmedText = addInput.trim();
    if (!trimmedText) return; // prevent empty todos

    const newTodo = {
      id: Date.now(),
      text: trimmedText,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setAddInput("");
  };

  const handlEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodos();
    }
  };

  const todoCompleted = (id)=>{
   setTodos((curr)=>
     curr.map((todo)=>
     todo.id === id ? {...todo, completed : !todo.completed} : todo
    )   
    )
  }

  const deleteTheTodo = (id) =>{
    setTodos((currTodo)=>
            currTodo.filter((todo)=>
            todo.id !== id
            )
    )
      
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Todo App</h1>
      <TodoInput
        addInputOnSearch={addInputOnSearch}
        value={addInput}
        addTodos={addTodos}
        handlEnterKeyPress={handlEnterKeyPress}
      />
      <TodoList todos={todos} todoCompleted = {todoCompleted} deleteTheTodo = {deleteTheTodo} />
    </div>
  );
};

export default App;
