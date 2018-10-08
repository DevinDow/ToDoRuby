import React from "react"
class NewList extends React.Component {

  constructor(props) {
    super(props);
    console.log("NewList");
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
      name: this.name.value
    })
    this.toggleCreating();
  }

  render() {
    let name = this.state.creating ? <input className="name" type="text" ref={input => this.name = input} /> : "";
    let createButton = this.state.creating ? <button onClick={() => this.handleCreate()}>Create</button> : "";
    return (
      <div className="list">
        {name}
        {createButton}
        <button onClick={() => this.toggleCreating()}>{this.state.creating ? 'Cancel' : 'New List'}</button>
      </div>
    );
  }

}

export default NewList
