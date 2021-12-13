import React, { useState, useEffect } from 'react';

const App = () => {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        async function getData() {
        // let response = await fetch("https://reqres.in/api/users").then(response => response.json())
        let response = await fetch("https://api.imgflip.com/get_memes").then(response => response.json())
            // console.log(response.data)
        
            const users_data = [...response.data.memes]
            console.table(users_data)
            setUsers(users_data)
        }
        getData();
    }, [])

    return(
        <>
            {/* {users.length === 0 ? 'Loading....' : 'Data Loaded'} */}
            <h1>Data Loaded</h1>
            {users.map((user, index) => {
                return (
                // <div key={index}>
                    <img key={index} src={user.url} alt={user.name} />
                // </div>
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