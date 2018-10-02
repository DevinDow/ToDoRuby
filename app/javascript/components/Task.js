import React from "react"
import PropTypes from "prop-types"
class Task extends React.Component {

  constructor(props) {
    super(props);
    console.log("Task " + props.task.id + " = " + props.task.name);
    console.log(props)
    this.state = {
      editable: false
    }
    this.handleDone = this.handleDone.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleDone() {
    // allow checking Done when not editable to do an update
    if (!this.state.editable) {
      this.props.handleUpdate({
        id: this.props.task.id,
        priority: this.props.task.priority, 
        done: this.done.checked, 
        name: this.props.task.name
      })
    }
  }

  handleEdit() {
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
    let priority = this.state.editable ? <input className="priority" type="number" ref={input => this.priority = input} defaultValue={this.props.task.priority} /> : <span className="priority">{this.props.task.priority}</span>;
    let name = this.state.editable ? <input className="name" type="text" ref={input => this.name = input} defaultValue={this.props.task.name} /> : <span className="name">{this.props.task.name}</span>;
    return (
      <div className="task">
        {priority}
        <input className="done" type="checkbox" ref={input => this.done = input} defaultChecked={this.props.task.done} onClick={() => this.handleDone()} />
        {name}
        <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.task.id)} data-confirm="Are you sure?">Delete</button>
      </div>
    );
  }

}

export default Task
