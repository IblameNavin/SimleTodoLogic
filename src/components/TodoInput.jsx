 const TodoInput = ({addInputOnSearch, value, addTodos, handleKey}) => {
  return (
    <div className="flex justify-center mt-6">
      <div className="w-full max-w-md flex gap-3">
        <input
          type="text" onChange={addInputOnSearch} value={value} onKeyDown={handleKey}
          placeholder="Add a todo..."
          className="flex-1 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer" onClick={addTodos}>
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput
