import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';

import storage from 'redux-persist/lib/storage';


const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {contacts: [], filter: ''},
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },

    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  },
});


const phonebookPersistConfig = {
  key: 'contacts',
  storage,
};

export const persistedPhonebookReducer = persistReducer(
  phonebookPersistConfig,
  phonebookSlice.reducer
);

export const { addContact, removeContact, setFilter } = phonebookSlice.actions;


