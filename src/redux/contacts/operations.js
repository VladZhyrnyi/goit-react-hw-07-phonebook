import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, postContact, deleteContact } from 'contacts-api';

export const getContactAction = createAsyncThunk(
  'contacts/getContacts',
  async () => await getContacts()
);

export const postContactAction = createAsyncThunk(
  'contacts/postContact',
  async data => {
    await postContact(data);

    return data;
  }
);

export const deleteContactAction = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await deleteContact(id);

    return id;
  }
);
