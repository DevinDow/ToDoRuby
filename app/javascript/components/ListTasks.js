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
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    console.log("ListTasks.componentDidMount()");
    fetch(Routes.list_tasks_path(this.props.list.id) + '.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ tasks: data }) });
  }

  handleEdit(id) {
    if (this.state.editable) {
      console.log('UPDATING Task ' + id)

      this.token = $('meta[name="csrf-token"]').attr('content');
      console.log('token = ' + this.token)
  
      fetch(Routes.task_path(id) + '.json', 
      {
        method: 'PUT',
        body: JSON.stringify({task: {
          priority: this.priority.value, 
          done: this.done.checked, 
          name: this.name.value
        }}),
        headers: { 
          'Content-Type': 'application/json',
          'X-CSRF-Token': this.token
        }
      }).then((response) => { 
        console.log(response);
        // update Task in UI
      })
      }
    this.setState({editable: !this.state.editable})
  }

  handleDelete(id) {
    console.log('DELETING Task ' + id)

    this.token = $('meta[name="csrf-token"]').attr('content');
    console.log('token = ' + this.token)

    fetch(Routes.task_path(id) + '.json', 
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
              <Task task={task} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
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
