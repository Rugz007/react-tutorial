import React, { useState } from 'react'
import TestComponent from './TestComponent';
function FirstComponent(props) {
    const [mood, setMood] = useState(props.defaultMood);
    const changeMood = () => {
        setMood(props.newMood)
    }
    const displayEmote = (mood) => {
        switch (mood) {
            case 'happy':
                return ( <h4>:D</h4>)
            case 'sad':
                return ( <h4>:((</h4>)
            case 'angry':
                return ( <h4>{'>:('}</h4>)
            case 'calm':
                return ( <h4>:|</h4>)
        }
    }
    //Condition ? True : False
    return (
        <div>
            <h3>This is my mood: {mood} </h3>
            {displayEmote(mood)}
            <button onClick={changeMood}>Make me {props.newMood} {displayEmote(props.newMood)}</button>
        </div>
    )
}
export default FirstComponent