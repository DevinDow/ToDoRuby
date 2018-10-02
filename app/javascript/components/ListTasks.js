import React from "react"
import PropTypes from "prop-types"
import Task from "./Task";
class ListTasks extends React.Component {

  constructor(props) {
    super(props);
    console.log("ListTasks " + props.list.id + " = " + props.list.name);
    console.log(props);
  }

  render () {
    return (
      <React.Fragment>
        {
          this.props.tasks.map((task) => {
            return(
              <Task key={task.id} task={task} handleUpdate={this.props.handleUpdate} handleDelete={this.props.handleDelete} />
            )
          })
        }
      </React.Fragment>
    );
  }

}

export default ListTasks
