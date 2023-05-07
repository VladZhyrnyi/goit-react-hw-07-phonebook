import { useState } from 'react';
import {
  ContactForm,
  InputBlock,
  InputText,
  Input,
  SubmitBtn,
} from './AddContactForm.styled';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsApi';

export const AddContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useGetContactsQuery();

  const [addContact] = useAddContactMutation();
  
  const findContact = contact => {
    return contacts.find(item => item.name === contact.name);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contact = { name, number };

    if (findContact(contact)) {
      return alert(`${contact.name} is already in contacts.`);
    }
    addContact(contact);

    setName('');
    setNumber('');
  };

  return (
    <ContactForm onSubmit={handleSubmit}>
      <InputBlock>
        <InputText>Name:</InputText>
        <Input
          onChange={e => setName(e.currentTarget.value)}
          type="text"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputBlock>
      <InputBlock>
        <InputText>Number:</InputText>
        <Input
          onChange={e => setNumber(e.currentTarget.value)}
          type="tel"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputBlock>
      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </ContactForm>
  );
};
