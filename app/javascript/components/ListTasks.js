import React from "react"
import PropTypes from "prop-types"
import Task from "./Task";
class ListTasks extends React.Component {

  constructor(props) {
    super(props);
    console.log("ListTasks.constructor() props.list=" + props.list);
    this.state = {
      list: props.list,
      tasks: []
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    console.log("ListTasks.componentDidMount()");
    fetch('/lists/' + this.props.list.id + '/tasks.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ tasks: data }) });
  }

  handleUpdate(task) {
    console.log('UPDATING Task ' + task.id)

      this.token = $('meta[name="csrf-token"]').attr('content');
      console.log('token = ' + this.token)
  
    fetch('/task/' + task.id + '.json', 
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
      let newTasks = this.state.tasks.filter((t) => t.id !== task.id)
      newTasks.push(task)
      this.setState({
        tasks: newTasks
      })
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
    console.log("ListTasks.render() list.name=" + this.state.list.name);
    console.log("ListTasks.render() list.tasks=" + this.state.list.tasks);
    console.log("ListTasks.render() tasks=" + this.state.tasks);
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

ListTasks.propTypes = {
  list: PropTypes.node
};
export default ListTasks
