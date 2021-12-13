import AddItem from "./AddItem"

const Header = (props) => {

    const itemValue = (value) => {
        props.getMsg(value);
    }

    return (
        <div id="myDIV" className="header">
            <h2 style={{ margin: 5 }}>My To Do List</h2>
            <AddItem getItem={itemValue} />
        </div>
    );
}

export default Header;