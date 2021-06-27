import React from 'react'

function FirstComponent(props) {
    return(
        <div>
            <h3>This is our first component. I am {props.mood} to see it.</h3>
            <button onClick={props.logFunction}>Hello</button>
            {props.children}
        </div>
    )
}

export default FirstComponent