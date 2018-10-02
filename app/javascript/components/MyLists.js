import React from "react"
import PropTypes from "prop-types"
import List from "./List";
const MyLists = (props) => {
  
  console.log("MyLists Component");

  return (
    <React.Fragment>
      {
        props.my_lists.map((list) => {
          console.log("MyLists list.id=" + list.id);
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

MyLists.propTypes = {
  lists: PropTypes.node
};
export default MyLists
