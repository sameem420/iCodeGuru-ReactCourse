import React from 'react'

function NoData(props) {
    const { noDataHeading } = props
    return (
        <div>
            <h1>{noDataHeading}</h1>
        </div>
    )
}

export default NoData
