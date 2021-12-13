import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

const App = () => {
    const [user, setUser] = useState([])
    const [username, setUsername] = useState('sameem420');
    
    useEffect(() => {
        async function getData() {
        // let response = await fetch("https://reqres.in/api/users").then(response => response.json())
        let response = await Axios.post(`https://api.github.com/users/${username}`).then(response => response).catch(error => console.log(error))
            console.log(response.data)

            const user_data = [...user, response.data]
            console.table(user_data)
            setUser(user_data)
        }
        getData();
    }, [username])

    return(
        <>
        <select>
            <option></option>
        </select>
            {/* {users.length === 0 ? 'Loading....' : 'Data Loaded'} */}
            <input type="text"  value={username} onChange={(e) => setUsername(e.target.value)}/>
            {user.map((user, index) => {
                return (
                    <table key={index}>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>User Image</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><h1>{user.name}</h1></td>
                        
                            <td>
                            <img src={user.avatar_url} alt={user.name} width="100" />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                )
            })}
        </>
    )
}


// class App extends React.Component {
//     constructor() {
//         console.log("Constructor Called!")
//         super();    
//         this.state = {
//             count : 0,
//             arr : []
//         }
//         this.Increment = this.Increment.bind(this);
//         this.Decrement = this.Decrement.bind(this);
//     }

//     Increment = () => {
//         console.log(this.state.count)
//         this.setState({
//             count : this.state.count + 1
//         })
//     }
//     Decrement = () => {
//         console.log(this.state.count)
//         this.setState({
//             count : this.state.count - 1
//         })
//     }

//     componentDidMount() {
//         console.log("ComponentDidMount Called!")
//     }
//     componentWillUnmount() {
//         console.log("ComponentWillUnmount Called!")
//     }

//     render() {
//         console.log("Render Called!")
//     return(
//         <>
//             <h1>{this.state.count}</h1>
//             <button onClick={this.Increment}>Increment</button>
//             <button onClick={this.Decrement}>Decrement</button>
//         </>
//     )
// }
// }

export default App;