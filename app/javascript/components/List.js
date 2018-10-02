import React from "react"
import PropTypes from "prop-types"
import ListTasks from "./ListTasks";
import NewTask from "./NewTask";
class List extends React.Component {

  constructor(props) {
    super(props);
    console.log("List " + props.list.id + " = " + props.list.name);
    console.log(props);
    this.state = {
      tasks: []
    };
    this.fetchTasks = this.fetchTasks.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.fetchTasks()
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
    return (
      <div className="list">
        <h2><a href={`/lists/${this.props.list.id}`}>{this.props.list.name}</a></h2>
        <ListTasks list={this.props.list} tasks={this.state.tasks} handleUpdate={this.handleUpdate} handleDelete={this.handleDelete} fetchTasks={this.fetchTasks} />
        <NewTask list_id={this.props.list.id} handleCreate={this.handleCreate} fetchTasks={this.fetchTasks} />
      </div>
    );
  }
}

export default List
