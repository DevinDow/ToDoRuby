import React from "react"
import PropTypes from "prop-types"
import MyLists from "./MyLists";
const Main = (props) => {

  console.log("Main Component");
  console.log(props);

  return (
    <React.Fragment>
      <MyLists my_lists={props.my_lists} sharees_per_list={props.sharees_per_list} />
    </React.Fragment>
  );
}

export default Main
