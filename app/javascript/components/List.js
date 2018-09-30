import React from "react"
import PropTypes from "prop-types"
import Task from "./Task";
import HelloWorld from "./HelloWorld";
class List extends React.Component {

  constructor(props) {
    super(props);
    console.log("List.constructor() props.list=" + props.list);
    this.state = {
      list: props.list
    };
  }

  render () {
    console.log("List.render()");
    return (
      <div class="list">
        <h3>List React Component</h3>
        <HelloWorld greeting="Hello List" />
      </div>
    );
  }

}

List.propTypes = {
  list: PropTypes.node
};
export default List
