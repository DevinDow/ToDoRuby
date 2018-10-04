import React from "react"
import PropTypes from "prop-types"
import List from "./List";
class MyLists extends React.Component {
  
  constructor(props) {
    super(props);
    console.log("MyLists Component");
    console.log(props);
    this.state = {
      lists: []
    };
    this.fetchLists = this.fetchLists.bind(this);
    /*this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
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
        <a href='/lists/new'>New List</a>
      </React.Fragment>
    );
  }
}

export default MyLists
