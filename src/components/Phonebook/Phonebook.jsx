import { useEffect } from 'react';
import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';

import { getContactAction } from 'redux/contacts/operations';
import { setFilter } from 'redux/contacts/contactsSlice';
import { postContact, deleteContact } from 'contacs-api';

import { AddContactForm } from '../AddContactForm/AddContactForm';
import { Filter } from '../Filter/Filter';
import { Bars } from 'react-loader-spinner';
import { ContactList } from '../ContactList/ContactList';

import { Wrapper, Title } from './Phonebook.styled';

export function Phonebook() {
  const { contacts, isLoading, filter } = useSelector(state => state.phonebook);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactAction());
  }, [dispatch]);

  const findContact = contact => {
    return contacts.find(item => item.name === contact.name);
  };

  const handleAddContact = contact => {
    if (findContact(contact)) {
      return alert(`${contact.name} is already in contacts.`);
    }
    contact['id'] = nanoid();

    postContact(contact);

    setTimeout(() => dispatch(getContactAction()), 500);
  };

  const handleRemoveContact = async contactId => {
    deleteContact(contactId);

    setTimeout(() => dispatch(getContactAction()), 500);
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  visibleContacts.sort((prev, next) => prev.name.localeCompare(next.name));

  return (
    <Wrapper>
      <Title>Phonebook</Title>

      <AddContactForm onSubmit={handleAddContact} />

      <Title>Contacts</Title>

      <Filter value={filter} handler={value => dispatch(setFilter(value))} />
      <Bars visible={isLoading} />
      {contacts.length !== 0 && (
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={handleRemoveContact}
        />
      )}
    </Wrapper>
  );
}

