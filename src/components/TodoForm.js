// - `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
//   - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
//   - Once a todo is submitted, the Todo List should re-render and show the added todo.

import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super(); 
        this.state = {
            input: "",
        }
    }

    //update state
    handleChanges = event => {
        this.setState({
            input:event.target.value,
        });
    };

    //handle submit
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleAddItem(this.state.input);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    value={this.state.input} 
                    onChange={this.handleChanges} 
                    type="text" 
                    name="task"
                />
                <button>Add Task</button>
            </form>
            //Create button for clearing completed tasks
        )
    }
}

export default TodoForm;