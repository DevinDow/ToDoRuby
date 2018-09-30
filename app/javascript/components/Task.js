import React from "react"
import PropTypes from "prop-types"
class Task extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit() {
    // call ListTasks.handleUpdate()
    if (this.state.editable) {
      this.props.handleUpdate({
        id: this.props.task.id,
        priority: this.priority.value, 
        done: this.done.checked, 
        name: this.name.value
      })
    }

    // toggle editable
    this.setState({editable: !this.state.editable})
  }

  render () {
    console.log("Task.render()");
    let priority = this.state.editable ? <input class="priority" type="number" ref={input => this.priority = input} defaultValue={this.props.task.priority} /> : <span class="priority">{this.props.task.priority}</span>;
    let done = this.state.editable ? <input class="done" type="checkbox" ref={input => this.done = input} defaultValue={this.props.task.done} /> : <input class="done" type="checkbox" checked={this.props.task.done} disabled />;
    let name = this.state.editable ? <input class="name" type="text" ref={input => this.name = input} defaultValue={this.props.task.name} /> : <span class="name">{this.props.task.name}</span>;
    return (
      <div class="task">
        {priority}
        {done}
        {name}
        <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.task.id)} data-confirm="Are you sure?">Delete</button>
      </div>
    );
  }

}

Task.propTypes = {
  task: PropTypes.node
};
export default Task
