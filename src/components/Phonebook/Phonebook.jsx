import { nanoid } from 'nanoid';
import { AddContactForm } from '../AddContactForm/AddContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Wrapper, Title } from './Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  removeContact,
  setFilter,
} from 'redux/contacts/contactsSlice';

export function Phonebook() {
  const { contacts, filter } = useSelector(state => state.phonebook);
  const dispatch = useDispatch();

  const findContact = contact => {
    return contacts.find(item => item.name === contact.name);
  };

  const handleAddContact = contact => {
    if (findContact(contact)) {
      return alert(`${contact.name} is already in contacts.`);
    }
    contact['id'] = nanoid();

    dispatch(addContact(contact));
  };

  const handleRemoveContact = contactId => {
    dispatch(removeContact(contactId));
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

      {contacts.length !== 0 && (
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={handleRemoveContact}
        />
      )}
    </Wrapper>
  );
}
// }
