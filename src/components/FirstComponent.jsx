import React,{useState} from 'react'
import TestComponent from './TestComponent';
function FirstComponent(props) {
    const [mood,setMood] = useState(props.defaultMood);
    const changeMood = () =>
    {
        setMood(props.newMood)
    }
    return(
        <div>
            <TestComponent mood={mood}/>
            <h3>Parent Component: {mood} </h3>
            <button onClick={changeMood}>Make me {props.newMood} :)</button>
        </div>
    )
}
export default FirstComponent