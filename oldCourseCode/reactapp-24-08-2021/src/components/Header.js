import AddItem from "./AddItem";

function Header(props) {
    let { Name, Age, handleNameChange, handleAgeChange, handleSubmit } = props;
    
    // console.log(props)
    return (
        <div className="header">
           <input type="text" placeholder="Enter some text" value={Name} onChange={(e) => handleNameChange(e.target.value)} /> 
           <input type="text" placeholder="Enter some text" value={Age} onChange={(e) => handleAgeChange(e.target.value)} /> 
           <button onClick={handleSubmit}>Add Data</button>     
        </div>
    )
}

export default Header;

