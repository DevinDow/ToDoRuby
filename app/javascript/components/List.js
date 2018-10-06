import React from "react"
import PropTypes from "prop-types"
import Task from "./Task";
import NewTask from "./NewTask";
class List extends React.Component {

  constructor(props) {
    super(props);
    console.log("List " + props.list.id + " = " + props.list.name);
    console.log(props);
    this.state = {
      tasks: [],
      sharees: ''
    };
    this.fetchTasks = this.fetchTasks.bind(this);
    this.fetchSharees = this.fetchSharees.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.fetchTasks()
    this.fetchSharees()
  }

  fetchTasks() {
    fetch('/lists/' + this.props.list.id + '/tasks.json')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log("List " + this.props.list.id + " = " + this.props.list.name + " fetched " + data.length + " Task(s)");
        console.log(data);
        this.setState({ tasks: data }) 
      });
  }

  fetchSharees() {
    fetch('/lists/' + this.props.list.id + '/sharees.json')
      .then((response) => {
        return response.text()
      })
      .then((data) => {
        this.setState({ sharees: data }) 
      });
  }

  handleCreate(task) {
    console.log("CREATING Task " + task.name + " - priority=" + task.priority)
    console.log(task)

    let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    console.log('token = ' + token)
  
    fetch('/lists/' + this.props.list.id + '/tasks.json', 
    {
      method: 'POST',
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
