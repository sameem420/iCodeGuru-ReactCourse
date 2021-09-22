import React from 'react'
import Child from './Child'

function Home(props) {
    console.log(props)
    return (
        <div>
            <Child />
        </div>
    )
}

export default Home
