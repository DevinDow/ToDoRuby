import React from "react"
import PropTypes from "prop-types"
class List extends React.Component {
  render () {
    return (
      <React.Fragment>
        List name = {this.props.list.name}
      </React.Fragment>
    );
  }
}

List.propTypes = {
  list: PropTypes.node
};
export default List
