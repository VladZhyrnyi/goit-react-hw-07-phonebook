import React from 'react';
import { Contact } from 'components/Contact/Contact';
import { List, ListItem, Title } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <>
      <Title>Contacts</Title>
      <List>
        {contacts.map(({ id, name, number }) => {
          return (
            <ListItem key={id}>
              <Contact id={id} name={name} number={number} />
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
