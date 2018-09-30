import React from "react"
import PropTypes from "prop-types"
import Task from "./Task";
class ListTasks extends React.Component {

  constructor(props) {
    super(props);
    console.log("ListTasks.constructor() props.list=" + props.list);
    this.state = {
      list: props.list,
      tasks: []
    };
  }

  componentDidMount(){
    console.log("ListTasks.componentDidMount()");
    fetch(Routes.list_tasks_path(this.props.list.id) + '.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ tasks: data }) });
  }

  render () {
    console.log("ListTasks.render() list.name=" + this.state.list.name);
    console.log("ListTasks.render() list.tasks=" + this.state.list.tasks);
    console.log("ListTasks.render() tasks=" + this.state.tasks);
    return (
      <React.Fragment>
        {
          this.state.tasks.map((task) => {
            return(
              <Task task={task} />
            )
          })
        }
      </React.Fragment>
    );
  }

}

ListTasks.propTypes = {
  list: PropTypes.node
};
export default ListTasks
