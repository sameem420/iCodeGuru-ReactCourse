import React from "react";

function TodosList({ todos, deleteTodo }) {
  return (
    <div>
      {todos?.map((todo, index) => {
        return (
          <ul className="list-group">
            <li key={index} className="list-group-item m-2">
              <h1>{todo}</h1>
              <button
                className="btn btn-danger w-50"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default TodosList;
