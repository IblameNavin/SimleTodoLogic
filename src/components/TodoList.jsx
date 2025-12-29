const TodoList = ({ todos, todoCompleted, deleteTheTodo}) => {
  return (
    <div className="w-full max-w-md">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between bg-white p-3 mb-2 rounded shadow"
        >
            <div className={`flex-1 ${todo.completed ? "line-through text-gray-400" : ""}`}>
              {todo.text}
            </div>
          <div className="flex gap-2">
            <button className="text-green-500 hover:text-green-700" onClick={() => todoCompleted(todo.id)}>✔</button>
            <button className="text-red-500 hover:text-red-700" onClick={() => deleteTheTodo(todo.id)}>✖</button>
           
         
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
