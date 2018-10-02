import React from "react"
import PropTypes from "prop-types"
class NewTask extends React.Component {

  constructor(props) {
    super(props);
    console.log("NewTask");
    console.log(props)
    this.state = {
      creating: false
    }
    this.toggleCreating = this.toggleCreating.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
  }

  toggleCreating() {
    this.setState({creating: !this.state.creating})
  }

  handleCreate() {
    this.props.handleCreate({
      priority: this.priority.value, 
      name: this.name.value
    })
    this.toggleCreating();
  }

  render() {
    let priority = this.state.creating ? <input className="priority" type="number" ref={input => this.priority = input} /> : "";
    let name = this.state.creating ? <input className="name" type="text" ref={input => this.name = input} /> : "";
    let createButton = this.state.creating ? <button onClick={() => this.handleCreate()}>Create</button> : "";
    return (
      <div className="task">
        {priority}
        {name}
        {createButton}
        <button onClick={() => this.toggleCreating()}>{this.state.creating ? 'Cancel' : 'New Task'}</button>
      </div>
    );
  }

}

export default NewTask
