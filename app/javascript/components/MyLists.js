import React from "react"
import PropTypes from "prop-types"
import List from "./List";
class MyLists extends React.Component {
  
  constructor(props) {
    super(props);
    console.log("MyLists.constructor() props.my_lists=" + props.my_lists);
    this.state = {
      my_lists: props.my_lists
    };
  }
  
  render () {
    console.log("MyLists.render() state.my_lists=" + this.state.my_lists);
    console.log("MyLists.render() state.my_lists[0].name=" + this.state.my_lists[0].name);
    return (
      <React.Fragment>
        {
          this.state.my_lists.map((list) => {
            return(
              <div key={list.id}>
                <List list={list} />
                <hr/>
              </div>
            )
          })
        }
      </React.Fragment>
    );
  }

}

MyLists.propTypes = {
  lists: PropTypes.node
};
export default MyLists
