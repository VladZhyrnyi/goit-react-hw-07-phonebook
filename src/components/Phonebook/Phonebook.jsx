import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { AddContactForm } from '../AddContactForm/AddContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Wrapper, Title } from './Phonebook.styled';

const LS_KEY = 'phonebook';

export function Phonebook() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const phonebook = localStorage.getItem(LS_KEY);
    if (phonebook) {
      setContacts(JSON.parse(phonebook));
    }
  }, []);

  useEffect(() => {
    if (contacts.length !== 0) {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  const findContact = contact => {
    return contacts.find(item => item.name === contact.name);
  };

  const addContact = contact => {
    if (findContact(contact)) {
      return alert(`${contact.name} is already in contacts.`);
    }
    contact['id'] = nanoid();
    setContacts([...contacts, contact]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  visibleContacts.sort((prev, next) =>
    prev.name.localeCompare(next.name)
  );

  return (
    <Wrapper>
      <Title>Phonebook</Title>

      <AddContactForm onSubmit={addContact} />

      <Title>Contacts</Title>

      <Filter value={filter} handler={setFilter} />

      {contacts.length !== 0 && (
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      )}
    </Wrapper>
  );
}
// }
