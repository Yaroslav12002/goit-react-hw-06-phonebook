import { createSlice, nanoid } from '@reduxjs/toolkit';

const INITIAL_STATE = [
  { name: 'Welcome to', number: '1234-567801', id: 'qucrmobV8' },
  { name: 'ContactBook application', number: '1234-5678', id: 'qucrmobV9' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(name, number) {
        return { payload: { name, number, id: nanoid() } };
      },
    },

    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
