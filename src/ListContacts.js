import React, { Component } from "react";

import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";

class ListContacts extends Component {
  state = {
    query: ""
  };

  updateQuery = query => {
    this.setState({ query: query.trim() });
  };

  clearQuery = () => {
    this.setState({ query: "" });
  };
  render() {
    const { contacts } = this.props;
    const { query } = this.state;

    let showingContacts;
    if (query) {
      const match = new RegExp(escapeRegExp(this.state.query), "i");
      showingContacts = contacts.filter(contact => match.test(contact.name));
    } else {
      showingContacts = contacts;
    }

    showingContacts.sort(sortBy("name"));
    return (
      <div className="list-contacts">
        {/* {JSON.stringify(this.state)} to view the searched query on UI*/}
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="search contacts"
            value={this.state.query}
            onChange={event => this.updateQuery(event.target.value)}
          />
        </div>

        {showingContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>
              Now Showing {showingContacts.length} of {contacts.length} total
            </span>
            <button onClick={this.clearQuery}>Show All</button>
          </div>
        )}
        <ol className="contact-list">
          {showingContacts.map(contact => (
            <li key="{contact.name}">
              {" "}
              {contact.name}
              <div className="contact-list-details">
                <p>{contact.phone_number}</p>
                <p>{contact.address}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ListContacts;
