import React from 'react';
import { Wrapper, ContactInfo,DeleteBtn } from './Contact.styled';

import { useDeleteContactMutation } from 'redux/contacts/contactsApi';

export function Contact({ id, name, number}) {
const [deleteContact] = useDeleteContactMutation()

  return (
    <Wrapper>
      <ContactInfo>
        <span>{name} :</span>
        <span>{number}</span>
      </ContactInfo>
      <DeleteBtn type="button" onClick={() => deleteContact(id)}>
        Delete
      </DeleteBtn>
    </Wrapper>
  );
}
