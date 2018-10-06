import React from "react"
import PropTypes from "prop-types"
import Lists from "./Lists";
const Main = (props) => {

  console.log("Main Component");
  console.log(props);

  return (
    <React.Fragment>
      <Lists />
    </React.Fragment>
  );
}

export default Main
