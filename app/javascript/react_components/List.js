import React from "react"
import Sharees from "./Sharees";
import Task from "./Task";
import NewTask from "./NewTask";
import * as APIs from '../apis.js'
class List extends React.Component {

  constructor(props) {
    super(props);
    console.log("List " + props.list.id + " = " + props.list.name);
    console.log(props);
    this.state = {
      tasks: []
    };
    this.fetchTasks = this.fetchTasks.bind(this);
    this.setTasks = this.setTasks.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.fetchTasks()
  }

  fetchTasks() {
    APIs.fetchTasks(this.props.list.id, this.setTasks)
  }

  setTasks(tasks) {
    this.setState({ tasks: tasks })
  }

  handleCreate(task) {
    APIs.createTask(this.props.list.id, task, this.fetchTasks)
  }

  handleUpdate(task) {
    APIs.updateTask(task, this.fetchTasks)
  }

  handleDelete(id) {
    APIs.deleteTask(id, this.fetchTasks)
  }

  render () {
    return (
      <div className="list container">
        <h2><a href={`/lists/${this.props.list.id}`}>{this.props.list.name}</a></h2>
        <Sharees list_id={this.props.list.id} />
        {
          this.state.tasks.map((task) => {
            return(
              <Task key={task.id} task={task} handleUpdate={this.handleUpdate} handleDelete={this.handleDelete} />
            )
          })
        }
        <NewTask list_id={this.props.list.id} handleCreate={this.handleCreate} fetchTasks={this.fetchTasks} />
      </div>
    );
  }
}

export default List
