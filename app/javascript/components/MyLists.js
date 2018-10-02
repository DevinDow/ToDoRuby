import React from "react"
import PropTypes from "prop-types"
import List from "./List";
const MyLists = (props) => {
  
  console.log("MyLists Component");

  return (
    <React.Fragment>
      {
        props.my_lists.map((list) => {
          return(
            <div key={list.id}>
              <List list={list} sharees={props.sharees_per_list[list.id]} />
              <hr/>
            </div>
          )
        })
      }
      <a href='/lists/new'>New List</a>
    </React.Fragment>
  );
}

export default MyLists
