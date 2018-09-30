import React from "react"
import PropTypes from "prop-types"
class ListTasks extends React.Component {

  constructor(props) {
    super(props);
    console.log("ListTasks.constructor() props.list=" + props.list);
    this.state = {
      list: props.list
    };
  }

  render () {
    console.log("ListTasks.render() list.name=" + this.state.list.name);
    console.log("ListTasks.render() list.tasks=" + this.state.list.tasks);
    return (
      <React.Fragment>
        <h4>ListTasks React Component for {this.state.list.name}</h4>
      </React.Fragment>
    );
  }

}

ListTasks.propTypes = {
  list: PropTypes.node
};
export default ListTasks
