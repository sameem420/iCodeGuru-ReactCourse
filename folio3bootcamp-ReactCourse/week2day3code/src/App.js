import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const addTodo = () => {
    if (!text) {
      return;
    } else {
      setTodos((prevState) => [...prevState, text]);
      setText("");
    }
  };

  const deleteTodo = (index) => {
    const todosData = [...todos];
    todosData.splice(index, 1);
    setTodos(todosData);
  };

  return (
    <div className="container">
      <div className="mt-5">
        <label className="form-label">Enter Todo</label>
        <input
          type="text"
          className="form-control"
          value={text}
          onChange={handleChange}
        />
        <button className="btn btn-success mt-2" onClick={addTodo}>
          Add Todo
        </button>
      </div>
      <h1>Todo Text : {text}</h1>
      {todos.map((todo, index) => {
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
};

export default App;
