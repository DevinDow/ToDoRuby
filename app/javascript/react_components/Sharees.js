import React from "react"
import * as APIs from '../apis.js'
class Sharees extends React.Component {

  constructor(props) {
    super(props);
    console.log("Sharees " + props.list_id);
    console.log(props);
    this.state = {
      sharees: ''
    };
    this.fetchSharees = this.fetchSharees.bind(this);
    this.setSharees = this.setSharees.bind(this);
  }

  componentDidMount() {
    this.fetchSharees()
  }

  fetchSharees() {
    APIs.fetchSharees(this.props.list_id, this.setSharees)
  }

  setSharees(sharees) {
    this.setState({ sharees: sharees })
  }

  render () {
    let sharees = this.state.sharees ? "SHARED WITH: " + this.state.sharees : "";
    return (
      <div>
        {sharees}
      </div>
    );
  }
}

export default Sharees
