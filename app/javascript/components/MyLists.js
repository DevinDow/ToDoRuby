import React from "react"
import PropTypes from "prop-types"
import List from "./List";
import NewList from "./NewList";
class MyLists extends React.Component {
  
  constructor(props) {
    super(props);
    console.log("MyLists Component");
    console.log(props);
    this.state = {
      lists: []
    };
    this.fetchLists = this.fetchLists.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    /*this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);*/
  }

  componentDidMount() {
    this.fetchLists()
  }

  fetchLists() {
    fetch('/lists.json')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log("fetched " + data.length + " List(s)");
        console.log(data);
        this.setState({ lists: data }) 
      });
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
      <React.Fragment>
        {
          this.state.lists.map((list) => {
            return(
              <div key={list.id}>
                <List list={list} />
                <hr/>
              </div>
            )
          })
        }
        <NewList handleCreate={this.handleCreate} />
      </React.Fragment>
    );
  }
}

export default MyLists
