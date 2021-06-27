import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState(0)
    const onClick = () =>
    {
        setCount(count+1)
        console.log(count)
        console.log(count)
        console.log(count)
        console.log(count)
        console.log(count)
    }
    return (
        <div>
            <h3>This is your count: {count}</h3>
            <button onClick={onClick}>Increase Count</button>
        </div>
    )
}
