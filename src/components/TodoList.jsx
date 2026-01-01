const TodoList = ({todos, todoCompleted, deleteTheTodo}) => {
  // const dummyTodos = [
  //   {
  //     id: 1,
  //     text: "Navin",
  //     completed: false,
  //   },
  // ];
  return (
    <div className="flex justify-center mt-6">
      <div className="w-full max-w-md space-y-3">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="border flex items-center justify-between bg-white p-3 rounded shadow"
          >
            <div className="flex items-center gap-3 flex-1">

              
              <input type="checkbox" checked = {todo.completed} onChange={()=> todoCompleted(todo.id)} />
                <span className= {todo.completed ? "line-through text-gray-400" : "text-gray-800"}>{todo.text}</span>
            </div>


            <div className="flex gap-2">
              <button className="text-blue-500 text-sm cursor-pointer"  >Edit</button>
              <button className="text-red-500 text-sm cursor-pointer" onClick={()=>deleteTheTodo(todo.id)} >Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
