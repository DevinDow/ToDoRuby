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
        <h2><a href={Routes.list_path(this.state.list)}>{this.state.list.name}</a></h2>
        <ListTasks list={this.state.list} />
        <a href={Routes.new_list_task_path(this.state.list)}>New Task</a>
      </div>
    );
  }

}

List.propTypes = {
  list: PropTypes.node
};
export default List
