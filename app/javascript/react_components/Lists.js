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
    this.setLists = this.setLists.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    /*this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);*/
  }

  componentDidMount() {
    APIs.fetchLists(this.setLists)
  }

  setLists(lists) {
    this.setState({ lists: lists })
  }

  handleCreate(list) {
    console.log("CREATING List " + list.name)
    console.log(list)

    let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    console.log('token = ' + token)
  
    fetch('/lists.json', 
    {
      method: 'POST',
      body: JSON.stringify({list: list}),
      headers: { 
        'Content-Type': 'application/json',
        'X-CSRF-Token': token
      }
    }).then((response) => { 
      console.log(response);

      // update Lists in UI
      this.fetchLists()
    })
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
