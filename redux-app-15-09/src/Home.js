import React from 'react'
import Child from './Child';

function Home({ Name }) {
    return (
        <div>
            <h1>Home Component</h1>
            <Child Name={Name} />
        </div>
    )
}

export default Home
