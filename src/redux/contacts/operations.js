import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, postContact, deleteContact } from 'contacts-api';

export const getContactAction = createAsyncThunk(
  'contacts/getContacts',
  async () => await getContacts()
);

export const postContactAction = createAsyncThunk(
  'contacts/postContact',
  async contact => await postContact(contact)
);

export const deleteContactAction = createAsyncThunk(
  'contacts/deleteContact',
  async id => await deleteContact(id)
);
