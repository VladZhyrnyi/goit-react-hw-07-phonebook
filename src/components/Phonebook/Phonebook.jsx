import { useDispatch, useSelector } from 'react-redux';

import { selectFilter, setFilter } from 'redux/filter/filterSlice';

import { AddContactForm } from '../AddContactForm/AddContactForm';
import { Filter } from '../Filter/Filter';
import { Bars } from 'react-loader-spinner';
import { ContactList } from '../ContactList/ContactList';

import { Wrapper } from './Phonebook.styled';

import { useGetContactsQuery } from 'redux/contacts/contactsApi';

export const Phonebook = () => {
  const { data: contacts, isLoading } = useGetContactsQuery();
  const filter = useSelector(selectFilter);

  let filteredContacts = [];

  if (contacts) {
    filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    filteredContacts.sort((prev, next) => prev.name.localeCompare(next.name));
  }

  return (
    <Wrapper>
      <h1>Phonebook</h1>

      <AddContactForm />

      <Filter />
      <Bars visible={isLoading} />
      {filteredContacts.length !== 0 ? (
        <ContactList contacts={filteredContacts} />
      ) : (
        <h2>Ooops. Something wen't wrong</h2>
      )}
    </Wrapper>
  );
};
