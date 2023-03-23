import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { AddContactForm } from '../AddContactForm/AddContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Wrapper, Title } from './Phonebook.styled';

export class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  findContact(contact) {
    return this.state.contacts.find(item => item.name === contact.name);
  }

  addContact = contact => {
    if (this.findContact(contact)) {
      return alert(`${contact.name} is already in contacts.`);
    }
    contact['id'] = nanoid();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  setFilter = text => {
    this.setState({ filter: text });
  };

  render() {
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    
    visibleContacts.sort((prevItem, nextItem) =>
      prevItem.name.localeCompare(nextItem.name)
    );

    return (
      <Wrapper>
        <Title>Phonebook</Title>

        <AddContactForm onSubmit={this.addContact} />

        <Title>Contacts</Title>

        <Filter value={this.state.filter} handler={this.setFilter} />

        {this.state.contacts.length !== 0 && (
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        )}
      </Wrapper>
    );
  }
}
