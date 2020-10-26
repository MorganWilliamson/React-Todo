// - `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.

import React from "react";

const Todo = props => {
    const handleClick = () => {
        props.handleToggleTask(props.task.id)
    }

    return (
        <div onClick={handleClick} className={`task${props.task.completed ? ' completed' : ''}`}>
            <p>{props.task.task}</p>
        </div>
    )
}

export default Todo;