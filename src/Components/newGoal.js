import React, {useState} from 'react';

const NewGoal = (props) => {
    const[textValue, prevTextvalue] = useState('')

    const addGoalHandler = (event) => {
        event.preventDefault();
        const newGoal = { id: Math.random().toString(), text: textValue }
        prevTextvalue('')
        props.onAddGoal(newGoal)
    }

const textChangeHandler = (event) => {
    prevTextvalue(event.target.value)
}
return (
    <form onSubmit={addGoalHandler}>
        <input value={textValue} type="text" onChange={textChangeHandler}/>
        <button type="submit">Add Goals</button>
    </form>
)

}

export default NewGoal;