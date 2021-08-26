import { useState } from "react";

const AddItem = (props) => {
    const [item, setItem] = useState();
    

    const getInputValue = () => {
        props.getItem(item); 
    }
    return (
        <>
            <input type="text" value={item} id="myInput" placeholder="Title..."
                onChange={(e) => setItem(e.target.value)} />

            <span onClick={() => getInputValue()} className="addBtn">Add</span>
        </>
    );
}

export default AddItem;