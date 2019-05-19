import React, { Component } from "react";
import { contacts } from "./contacts";
import ListContact from "./ListContacts";

class App extends Component {
  state = {
    contacts: contacts
  };
  render() {
    return (
      <div className="App">
        <ListContact contacts={this.state.contacts} />
      </div>
    );
  }
}
export default App;
