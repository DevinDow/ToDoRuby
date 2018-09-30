import React from "react"
import PropTypes from "prop-types"
import List from "./List";
class MyLists extends React.Component {
  
  constructor(props) {
    super(props);
    console.log("MyLists.constructor() props.my_lists=" + props.my_lists);
    this.state = {
      my_lists: props.my_lists
    };
  }
  
  render () {
    console.log("MyLists.render() state.my_lists=" + this.state.my_lists);
    return (
      <React.Fragment>
        <h2>MyLists React Component</h2>
        <List />
        <List />
      </React.Fragment>
    );
  }

}

MyLists.propTypes = {
  lists: PropTypes.node
};
export default MyLists
