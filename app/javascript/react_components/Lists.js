import React from "react"
import List from "./List";
import NewList from "./NewList";
import * as APIs from '../apis.js'
class Lists extends React.Component {
  
  constructor(props) {
    super(props);
    console.log("Lists Component");
    console.log(props);
    this.state = {
      lists: []
    };
    this.fetchLists = this.fetchLists.bind(this);
    this.setLists = this.setLists.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    /*this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);*/
  }

  componentDidMount() {
    this.fetchLists()
  }

  fetchLists() {
    APIs.fetchLists(this.setLists)
  }

  setLists(lists) {
    console.log("* setLists()")
    this.setState({ lists: lists })
  }

  handleCreate(list) {
    APIs.createList(list, this.fetchLists)
  }

  render () {
    return (
      <div className="lists">
        {this.state.lists.map((list) => {
            return(
              <React.Fragment key={list.id}>
                <List list={list} />
                <hr/>
              </React.Fragment>
            )
          })}
        <NewList handleCreate={this.handleCreate} />
      </div>
    );
  }
}

export default Lists
