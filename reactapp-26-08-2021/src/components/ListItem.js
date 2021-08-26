const ListItem = (props) => {
    const {todo, idx, deleteItem} = props;
    console.log(todo, idx)
    return ( 
        <li className={todo.isDone ? 'checked' : ''}>{todo.msg}
        <span className="close" onClick={() => deleteItem(idx)}>x</span>
        </li>
     );
}
 
export default ListItem;