import React from "react"
import PropTypes from "prop-types"
class Task extends React.Component {
  render () {
    return (
      <React.Fragment>
        Task name = : {this.props.task.name}
      </React.Fragment>
    );
  }
}

Task.propTypes = {
  task: PropTypes.node
};
export default Task
