import './App.css';
import Header from './components/Header'
import AddItem from './components/AddItem';
import { useState } from 'react';

const App = () => {
    const [Name, setName] = useState('');
    const [Age, setAge] = useState(0);
    const [userData, setUserData] = useState([]);



    const handleNameChange = (newName) => {
        // console.log(newName)
        setName(newName);
        // ev.preventDefault();
        // if(firstName === '' ||  lastName === '') {
        //     alert("Please write something")
        // }
        // else {
        //     alert('I got the value')
        // }
    }

    const handleAgeChange = (newAge) => {
        setAge(newAge)
    }
    
    const handleSubmit = () => {
        
        const data = { Name, Age };
        console.log(data)
        setUserData(userData.push(data))
        console.log(userData)
    }

    return(
        <>
            {/* <h1>{firstName + lastName}</h1> */}
            {/* <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter some text" value={firstName} onChange={(e) => setfirstName(e.target.value)} /> 
                
                <input type="text" placeholder="Enter some text" value={lastName} onChange={(e) => setlastName(e.target.value)}  /> 
                <button>Update Name</button>
            </form> */}
            <Header Name={Name} Age={Age} handleNameChange={handleNameChange} handleAgeChange={handleAgeChange} handleSubmit={handleSubmit}/>
            <AddItem Name={Name} Age={Age} />
        </>
    )
}

export default App;