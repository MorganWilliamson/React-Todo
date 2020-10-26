// - `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
//   - All of your application data will be stored here on `<App />`.
//   - All of your `handler` functions should live here on `<App />`.

import React from 'react';
//component imports
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
//stylesheet import
import "./components/Todo.css"

//Starting To-Do list: 
const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
]

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      todo: todo,
    }
  }

  //Toggle task completion
  handleToggleTask = (taskID) => {
    this.setState({
      todo: this.state.todo.map(task => {
        if(task.id === taskID) {
          // console.log("Toggled!")
          return {
            ...task, 
            completed: !task.completed,
          }
        } else {
          return task;
        };
      })
    });
  };

  //Add new task
  handleAddTask = (event, task) => {
    event.preventDefault(); 
    const newTask = {
      task: event.target.task.value,
      id: Date.now(),
      completed: false,
    }
    this.setState({
        todo: [...this.state.todo, newTask]
    });
    console.log(newTask)
    //Set state of text box back to ""
    // this.setState({
    //   input: "",
    // })
  };

  //Clear completed tasks
  clearTasks = (event) => {
    event.preventDefault();
    this.setState({
      todo: this.state.todo.filter(task => (!task.completed))
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>To-Do List!</h2>
            <TodoForm handleAddTask={this.handleAddTask} clearTasks={this.clearTasks} />
        </div>
        <TodoList 
          handleToggleTask={this.handleToggleTask}
          todo={this.state.todo}
        />
      </div>
    );
  }
}

export default App;
