import React, { Component } from 'react';

class ListContacts extends Component {
    render() {
        return(
            <ol className='contact-list'>
                {this.props.contacts.map((contact) =>(
                    <li key="{contact.name}"> {contact.name}
                    <div className='contact-list-details'>
                    <p>{contact.phone_number}</p>
                    <p>{contact.address}</p>
                    </div>
                    </li>
                ) )}
            </ol>
        )
    }
}
export default ListContacts;