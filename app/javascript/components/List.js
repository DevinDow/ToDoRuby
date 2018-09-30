import React from "react"
import PropTypes from "prop-types"
class List extends React.Component {
  render () {
    return (
      <div class="list">
        <a href={Routes.edit_list_path(this.props.list)}><h1>{this.props.list.name}</h1></a>
      </div>
    );
  }
}

List.propTypes = {
  list: PropTypes.node
};
export default List
