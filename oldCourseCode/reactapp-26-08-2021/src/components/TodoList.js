import ListItem from "./ListItem";

const TodoList = (props) => {
    const {todos, completeItem, deleteItem} = props;
    return (
        <ul id="myUL">
            {todos.map((todo, key) => <ListItem key={key} idx={key} todo={todo} deleteItem={deleteItem} completeItem={completeItem} /> )}
            
            {/* <li className="checked">Pay bills</li>
            <li>Meet George</li>
            <li>Buy eggs</li>
            <li>Read a book</li>
            <li>Organize office</li> */}
        </ul>
    );
}

export default TodoList;