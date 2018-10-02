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
              <List list={list} />
              <hr/>
            </div>
          )
        })
      }
    </React.Fragment>
  );
}

export default MyLists
