import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [users, setUsers] = useState([]);
  const URL = "https://randomuser.me/api/?inc=gender,name,nat&results=5";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        // const users = [...users, data.results];
        setUsers(data.results);
        console.table(data.results);
      });
  }, []);

  return (
    <div>
      {users?.map((user, index) => {
        return (
          <div key={index}>
            <h1>{user.name.first}</h1>
            <h2>{user.nat}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;

// import TodosList from "./components/TodosList";

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [text, setText] = useState("");

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   useEffect(() => {
//     const todoss = localStorage.getItem("todosItems");
//     todoss && setTodos(JSON.parse(todoss));
//   }, []);

//   const addTodo = () => {
//     if (!text) {
//       return;
//     } else {
//       const todosData = [...todos, text];
//       // (prevState) => [...prevState, text];
//       setTodos(todosData);
//       setText("");
//       // sessionStorage.setItem("todosItems", JSON.stringify(todosData));
//       localStorage.setItem("todosItems", JSON.stringify(todosData));
//     }
//   };

//   const deleteTodo = (index) => {
//     const todosData = [...todos];
//     todosData.splice(index, 1);
//     setTodos(todosData);
//     // sessionStorage.setItem("todosItems", JSON.stringify(todosData));
//     localStorage.setItem("todosItems", JSON.stringify(todosData));
//   };

//   return (
//     <div className="container">
//       <div className="mt-5">
//         <label className="form-label">Enter Todo</label>
//         <input
//           type="text"
//           className="form-control"
//           value={text}
//           onChange={handleChange}
//         />
//         <button className="btn btn-success mt-2" onClick={addTodo}>
//           Add Todo
//         </button>
//       </div>
//       <h1>Todo Text : {text}</h1>
//       <TodosList todos={todos} deleteTodo={deleteTodo} />
//     </div>
//   );
// };

// export default App;
