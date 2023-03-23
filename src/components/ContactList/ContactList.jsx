import React from 'react';
import { Contact } from 'components/Contact/Contact';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({id, name, number}) => {
        return (
          <li key={id}>
            <Contact id={id} name={name} number={number} onDelete={onDeleteContact}/>
          </li>
        );
      })}
    </List>
  );
};
