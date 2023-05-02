import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts } from 'contacs-api';

export const getContactAction = createAsyncThunk(
  'contacts/getContacts',
  async () => await getContacts()
);
