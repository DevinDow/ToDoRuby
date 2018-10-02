import React from "react"
import PropTypes from "prop-types"
import Task from "./Task";
class ListTasks extends React.Component {

  constructor(props) {
    super(props);
    console.log("ListTasks " + props.list.id + " = " + props.list.name);
    console.log(props);
    this.state = {
      list: props.list,
      tasks: []
    };
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
        console.log("ListTasks " + this.props.list.id + " = " + this.props.list.name + " fetched " + data.length + " Task(s)");
        console.log(data);
        this.setState({ tasks: data }) 
      });
  }

  handleUpdate(task) {
    console.log('UPDATING Task ' + task.id)

      this.token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      console.log('token = ' + this.token)
  
    fetch('/tasks/' + task.id + '.json', 
    {
      method: 'PUT',
      body: JSON.stringify({task: task}),
      headers: { 
        'Content-Type': 'application/json',
        'X-CSRF-Token': this.token
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
      <React.Fragment>
        {
          this.state.tasks.map((task) => {
            return(
              <Task key={task.id} task={task} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
            )
          })
        }
      </React.Fragment>
    );
  }

}

export default ListTasks
