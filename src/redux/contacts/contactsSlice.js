import { createSlice } from '@reduxjs/toolkit';
import { getContactAction } from './operations';
import { handlePending, handleFulfilled, handleRejected } from './functions';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  filter: '',
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },

    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getContactAction.pending, handlePending)
      .addCase(getContactAction.fulfilled, handleFulfilled)
      .addCase(getContactAction.rejected, handleRejected);
  },
});

export const phonebookReducer = phonebookSlice.reducer;

export const { addContact, removeContact, setFilter } = phonebookSlice.actions;
