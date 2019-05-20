import React, { Component } from "react";

import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";

import "./vendor/bootstrap.min.css";
import "./index.css";

class ListContacts extends Component {
  state = {
    query: "",
    address: ""
  };

  updateQuery = query => {
    this.setState({ query: query.trim() });
  };

  clearQuery = () => {
    this.setState({ query: "" });
  };

  updateAddress = address => {
    this.setState({ address: address.trim() });
  };

  clearAddress = () => {
    this.setState({ address: "" });
  };
  render() {
    const { contacts } = this.props;
    const { query } = this.state;
    const { address } = this.state;

    let showingContacts;
    if (query) {
      const match = new RegExp(escapeRegExp(this.state.query), "i");
      showingContacts = contacts.filter(contact => match.test(contact.name));
    } else {
      showingContacts = contacts;
    }
    let showingAddress;
    if (address) {
      const matcha = new RegExp(escapeRegExp(this.state.address), "i");
      showingAddress = contacts.filter(contact => matcha.test(contact.address));
    } else {
      showingAddress = contacts;
    }

    showingContacts.sort(sortBy("name"));
    showingAddress.sort(sortBy("address"));
    return (
      <div className="list-contacts">
        <div className="search-bar">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="green-input" id="inputGroup-sizing-default">
                Search Contacts
              </span>
            </div>
            <input
              aria-label=""
              aria-describedby="basic-addon1"
              className="form-control"
              type="text"
              placeholder="by name"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
            <input
              aria-label=""
              aria-describedby="basic-addon1"
              className="form-control"
              type="text"
              placeholder="by address"
              value={this.state.address}
              onChange={event => this.updateAddress(event.target.value)}
            />
          </div>
        </div>

        {showingContacts.length !== contacts.length && (
          <div className="grey-text">
            <span>
              Now Showing {showingContacts.length} matching contacts names of{" "}
              {contacts.length} total contacts
            </span>
            <button className="green-button" onClick={this.clearQuery}>
              Show All
            </button>
          </div>
        )}

        <div className="container">
          <div className="row">
            {showingContacts.map(contact => (
              <li key="{contact.name}">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title mb-2 green-text">
                      {contact.name}
                    </h2>
                    <p className=" mt-3 mb-2 grey-text card-text">
                      {contact.phone_number}
                    </p>
                    <p className="card-text mb-2 grey-text">
                      {contact.address}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ListContacts;
