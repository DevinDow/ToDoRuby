import React from "react"
import PropTypes from "prop-types"
import ListTasks from "./ListTasks";
const List = (props) => {

  console.log("List Component - id " + props.list.id + " = " + props.list.name);
  return (
    <div>
      <h2><a href={`/lists/${props.list.id}`}>{props.list.name}</a></h2>
      <ListTasks list={props.list} />
      <a href={`/lists/${props.list.id}/tasks/new`}>New Task</a>
    </div>
  );
}

export default List
