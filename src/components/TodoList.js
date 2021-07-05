// - `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.

// your components will all go in the `component` directory.

import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
    return ( 
        <div className="taskList">
            {props.todo.map((task) => (
                <Todo handleToggleTask={props.handleToggleTask} key={task.id} task={task}/>
            ))}

        </div>
    )
}

export default TodoList;