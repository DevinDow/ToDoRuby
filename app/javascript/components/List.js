import React from "react"
import PropTypes from "prop-types"
import ListTasks from "./ListTasks";
import NewTask from "./NewTask";
const List = (props) => {

  console.log("List " + props.list.id + " = " + props.list.name);
  console.log(props);

  return (
    <div>
      <h2><a href={`/lists/${props.list.id}`}>{props.list.name}</a></h2>
      <ListTasks list={props.list} />
      <NewTask list_id={props.list.id} />
      <a href={`/lists/${props.list.id}/tasks/new`}>New Task</a>
    </div>
  );
}

export default List
