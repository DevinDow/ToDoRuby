import React from "react"
import PropTypes from "prop-types"
import ListTasks from "./ListTasks";
import NewTask from "./NewTask";
class List extends React.Component {

  constructor(props) {
    super(props);
    console.log("List " + props.list.id + " = " + props.list.name);
    console.log(props);
  }

  render () {
    return (
      <div>
        <h2><a href={`/lists/${this.props.list.id}`}>{this.props.list.name}</a></h2>
        <ListTasks list={this.props.list} />
        <NewTask list_id={this.props.list.id} />
        <a href={`/lists/${this.props.list.id}/tasks/new`}>New Task</a>
      </div>
    );
  }
}

export default List
