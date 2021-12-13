import React from 'react'

function AddItem(props) {
    return (
        <div>
            <h1>{props.Name}</h1>
            
            <h1>{props.Age}</h1>
            {/* <form>
                <input type="text" id="myInput" />
                <button className="addBtn">Add</button>
            </form> */}
        </div>
    )
}

export default AddItem;
