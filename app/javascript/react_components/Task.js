import React from "react"
class Task extends React.Component {

  constructor(props) {
    super(props);
    console.log("Task " + props.task.id + " = " + props.task.name);
    console.log(props)
    this.state = {
      editable: false
    }
    this.handleDone = this.handleDone.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleDone() {
    // allow checking Done when not editable to do an update
    if (!this.state.editable) {
      this.props.handleUpdate({
        id: this.props.task.id,
        done: this.done.checked, 
        priority: this.props.task.priority, 
        name: this.props.task.name
      })
    }
  }

  toggleEdit() {
    this.setState({editable: !this.state.editable});
  }

  handleSubmit() {
    if (this.state.editable) {
      this.props.handleUpdate({
        id: this.props.task.id,
        done: this.done.checked, 
        priority: this.priority.value, 
        name: this.name.value
      })
    }
    this.toggleEdit();
  }

  render () {
    let priority = this.state.editable ? <input className="priority" type="number" ref={input => this.priority = input} defaultValue={this.props.task.priority} /> : <span className="priority">{this.props.task.priority}</span>;
    let name = this.state.editable ? <input className="name" type="text" ref={input => this.name = input} defaultValue={this.props.task.name} /> : <span className="name">{this.props.task.name}</span>;
    let submit = this.state.editable ? <button onClick={() => this.handleSubmit()}>Submit</button> : "";
    return (
      <div className={this.props.task.done ? "task completed" : "task"}>
        <input className="done" type="checkbox" ref={input => this.done = input} defaultChecked={this.props.task.done} onClick={() => this.handleDone()} />
        {priority}
        {name}
        {submit}
        <button onClick={() => this.toggleEdit()}>{this.state.editable? 'Cancel' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.task.id)} data-confirm="Are you sure?">Delete</button>
      </div>
    );
  }

}

export default Task
