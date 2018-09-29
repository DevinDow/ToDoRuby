import React from "react"
import PropTypes from "prop-types"
class Task extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.task.priority}
        <input type="checkbox" checked={this.props.task.done} />
        {this.props.task.name}
      </React.Fragment>
    );
  }
}

Task.propTypes = {
  task: PropTypes.node
};
export default Task
