import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';

const App = () => {

    const dummy_todos = [
        { msg: 'Hit the gym', isDone: true },
        { msg: 'Pay bills', isDone: true },
        { msg: 'Meet George', isDone: false },
        { msg: 'Buy Eggs', isDone: false },
        { msg: 'Read a book', isDone: true }
    ]

    const [todos, setTodos] = useState(dummy_todos);

    const deleteItem = (idx) => {
        console.log(idx)
        const newTodos = todos.filter((val, index) => {
            return index !== idx;
        })
        console.log(newTodos)
        setTodos(newTodos);
    }

    const addItem = (message) => {

        const mytodo = [...todos, { msg: message, isDone: false }];

        setTodos(mytodo);
    }

    return (
        <>
            <Header getMsg={addItem} />
            <TodoList todos={todos} deleteItem={deleteItem} />
        </>
    );
}

export default App;