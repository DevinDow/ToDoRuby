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
      </React.Fragment>
    );
  }
}

export default Main
