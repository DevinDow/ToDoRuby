import React from "react"
import PropTypes from "prop-types"
import MyLists from "./MyLists";
class Main extends React.Component {

  constructor(props) {
    super(props);
    console.log("Main.constructor()");
  }

  render () {
    console.log("Main.render()");
    return (
      <React.Fragment>
        <h1>Main React Component</h1>
        <MyLists />
      </React.Fragment>
    );
  }
}

export default Main
