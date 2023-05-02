import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './contacts/contactsSlice';


export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
});
