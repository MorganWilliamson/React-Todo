// - `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
//   - All of your application data will be stored here on `<App />`.
//   - All of your `handler` functions should live here on `<App />`.

import React from 'react';
import ReactDOM from 'react-dom';
//component imports
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

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
  handleAddTask = (task) => {
    this.setState({
      todo: [...this.state.todo, {
        task: task,
        id: Date.now(),
        completed: false,
      }]
    });
  };

  //Clear completed tasks
  clearTasks = () => {
    this.setState({
      todo: this.state.todo.filter(task => (!task.completed))
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>To-Do List!</h2>
            <TodoForm handleAddTask={this.handleAddTask} />
        </div>
        <TodoList 
          clearTasks={this.clearTasks} 
          handleToggleTask={this.handleToggleTask}
          todo={this.state.todo}
        />
      </div>
    );
  }
}

export default App;
