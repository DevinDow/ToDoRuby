import React from "react"
import PropTypes from "prop-types"
import ListTasks from "./ListTasks";
class List extends React.Component {

  constructor(props) {
    super(props);
    console.log("List.constructor() props.list=" + props.list);
    this.state = {
      list: props.list
    };
  }

  render () {
    console.log("List.render() list.name=" + this.state.list.name);
    console.log("List.render() list.tasks=" + this.state.list.tasks);
    return (
      <div class="list">
        <h3>{this.state.list.name}</h3>
        <ListTasks list={this.state.list} />
      </div>
    );
  }

}

List.propTypes = {
  list: PropTypes.node
};
export default List
