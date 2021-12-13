import React, { useState, useEffect } from 'react';

const App = () => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        
    }, [])

    return(
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Update Value</button>
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