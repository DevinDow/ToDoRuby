import React from "react"
import PropTypes from "prop-types"
class Task extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit() {
    this.setState({editable: !this.state.editable})
  }

  handleDelete() {
    console.log('DELETING ' + this.props.task.id)

    this.token = $('meta[name="csrf-token"]').attr('content');
    console.log('token = ' + this.token)

    fetch(Routes.task_path(this.props.task.id), 
    {
      method: 'DELETE',
      headers: { 
        'Content-Type': 'application/json',
        'X-CSRF-Token': this.token
    }
    }).then((response) => { 
        // filter out Task
      })
  }

  render () {
    let priority = this.state.editable ? <input class="priority" type="number" defaultValue={this.props.task.priority} /> : <span class="priority">{this.props.task.priority}</span>;
    let done = this.state.editable ? <input class="done" type="checkbox" defaultValue={this.props.task.done} /> : <input class="done" type="checkbox" checked={this.props.task.done} disabled />;
    let name = this.state.editable ? <input class="name" type="text" defaultValue={this.props.task.name} /> : <span class="name">{this.props.task.name}</span>;
    return (
      <div class="task">
        {priority}
        {done}
        {name}
        <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.handleDelete()} data-confirm="Are you sure?">Delete</button>
      </div>
    );
  }

}

Task.propTypes = {
  task: PropTypes.node
};
export default Task
