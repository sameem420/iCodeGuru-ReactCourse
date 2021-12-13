import React, { useContext } from 'react'
import { favNumberContext } from './App'


function Child() {
    const {Name, favNumber, setFavNumber}  = useContext(favNumberContext)
    return (
        <div>
            <h1>{Name}</h1>
            <button onClick={() => setFavNumber(20)}>Update Number</button>
        </div>
    )
}

export default Child
