import React from "react";

const TodoInput = ({addInputOnSearch, addTodo, value, handleKeyPress}) => {
  return (
    <div className="flex w-full max-w-md mb-6">
      <input
        type="text" onChange={addInputOnSearch} value={value} onKeyDown={handleKeyPress}
        placeholder="Add a new task..."
        className="flex-1 p-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600 transition" onClick={addTodo}
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
