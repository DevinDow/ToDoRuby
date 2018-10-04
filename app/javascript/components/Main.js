import React from "react"
import PropTypes from "prop-types"
import MyLists from "./MyLists";
const Main = (props) => {

  console.log("Main Component");
  console.log(props);

  return (
    <React.Fragment>
      <MyLists />
    </React.Fragment>
  );
}

export default Main
