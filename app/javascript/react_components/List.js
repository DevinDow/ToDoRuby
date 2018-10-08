import React from "react"
import Task from "./Task";
import NewTask from "./NewTask";
import * as APIs from '../apis.js'
class List extends React.Component {

  constructor(props) {
    super(props);
    console.log("List " + props.list.id + " = " + props.list.name);
    console.log(props);
    this.state = {
      tasks: [],
      sharees: ''
    };
    this.setTasks = this.setTasks.bind(this);
    this.setSharees = this.setSharees.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.onTaskCreated = this.onTaskCreated.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    APIs.fetchTasks(this.props.list.id, this.setTasks)
    APIs.fetchSharees(this.props.list.id, this.setSharees)
  }

  setTasks(tasks) {
    this.setState({ tasks: tasks })
  }

  setSharees(sharees) {
    this.setState({ sharees: sharees })
  }

  onTaskCreated() {
    APIs.fetchTasks(this.props.list.id, this.setTasks)
  }

  handleCreate(task) {
    APIs.createTask(this.props.list.id, task, this.onTaskCreated)
  }

  handleUpdate(task) {
    console.log('UPDATING Task ' + task.id)

    let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    console.log('token = ' + token)
  
    fetch('/tasks/' + task.id + '.json', 
    {
      method: 'PUT',
      body: JSON.stringify({task: task}),
      headers: { 
        'Content-Type': 'application/json',
        'X-CSRF-Token': token
      }
    }).then((response) => { 
      console.log(response);

      // update Task in UI
      this.fetchTasks()
    })
  }

  handleDelete(id) {
    console.log('DELETING Task ' + id)

    this.token = $('meta[name="csrf-token"]').attr('content');
    console.log('token = ' + this.token)

    fetch('/tasks/' + id + '.json', 
    {
      method: 'DELETE',
      headers: { 
        'Content-Type': 'application/json',
        'X-CSRF-Token': this.token
      }
    }).then((response) => { 
      console.log(response);
      // filter out deleted Task
      let newTasks = this.state.tasks.filter((task) => task.id !== id)
      this.setState({
        tasks: newTasks
      })
    })
  }

  render () {
    let sharees = this.state.sharees ? "SHARED WITH: " + this.state.sharees : "";
    return (
      <div className="list container">
        <h2><a href={`/lists/${this.props.list.id}`}>{this.props.list.name}</a></h2>
        {sharees}
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
