import React from "react"
import PropTypes from "prop-types"
class Task extends React.Component {
  render () {
    return (
      <React.Fragment>
        <input class="priority" type="number" value={this.props.task.priority} />
        <input type="checkbox" checked={this.props.task.done} />
        <input class="name" type="text" value={this.props.task.name} />
        <input type="submit" value="Delete Task" />
      </React.Fragment>
    );
  }
}

Task.propTypes = {
  task: PropTypes.node
};
export default Task
