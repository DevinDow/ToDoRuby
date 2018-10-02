import React from "react"
import PropTypes from "prop-types"
import MyLists from "./MyLists";
const Main = (props) => {

  console.log("Main Component - props.my_lists=" + props.my_lists);

  return (
    <React.Fragment>
      <MyLists my_lists={props.my_lists} />
      <a href='/lists/new'>New List</a>
    </React.Fragment>
  );
}

export default Main
