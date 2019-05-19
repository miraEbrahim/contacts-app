import React, { Component} from 'react';
import { contacts } from './contacts'
import ListContact from './ListContacts';



class App extends Component {
  render() {
    return(
      <div className="App">
        <ListContact contacts={contacts}/>
      </div>
    )
  }
}
export default App;
