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
        <MyLists my_lists={this.props.my_lists} />
        <a href='/lists/new'>New List</a>
      </React.Fragment>
    );
  }
}

export default Main
