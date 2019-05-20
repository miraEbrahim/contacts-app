import React, { Component } from "react";

//import { contacts } from "./contacts";
import ListContact from "./ListContacts";
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount(){
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts})
    })
  }
  render() {
    return (
      <div className="App">
      <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-capitalize text-center green-text mt-4">
            phone book App
          </h1>
          <ListContact contacts={this.state.contacts} />
        </div>
      </div>
    </div>
    
  
     
      </div>
    

    );
  }
}
export default App;
