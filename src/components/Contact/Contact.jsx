import React from 'react';
import { Wrapper, DeleteBtn } from './Contact.styled';

export function Contact({ id, name, number, onDelete }) {
  return (
    <Wrapper>
      <p>
        {name}: {number}
      </p>
      <DeleteBtn type="button" onClick={() => onDelete(id)}>
        Delete
      </DeleteBtn>
    </Wrapper>
  );
}
