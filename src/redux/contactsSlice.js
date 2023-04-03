import { createSlice, nanoid } from '@reduxjs/toolkit';

const INITIAL_VALUE = [
  { name: 'Welcome to', number: '1234-567801', id: 'qucrmobV8' },
  { name: 'ContactBook application', number: '1234-5678', id: 'qucrmobV9' },
];
const contactsLocalStorage = localStorage.getItem('contacts');
const parsedContacts = JSON.parse(contactsLocalStorage);
const contactsInitialState = parsedContacts
  ? [...parsedContacts]
  : INITIAL_VALUE;

const saveToLocal = state => {
  localStorage.setItem('contacts', JSON.stringify(state));
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    //     addTask: {
    //       reducer(state, action) {
    //         state.push(action.payload);
    //       },
    //       prepare(text) {
    //         return {
    //           payload: {
    //             text,
    //             id: nanoid(),
    //             completed: false,
    //           },
    //         };
    //       },
    //     },
    addContact: {
      reducer(state, action) {
        const newState = [...state, action.payload];
        saveToLocal(newState);
        return newState;
      },
      prepare(name, number) {
        return { payload: { name, number, id: nanoid() } };
      },
    },

    deleteContact(state, action) {
      const newDeletedState = state.filter(
        contact => contact.id !== action.payload
      );
      saveToLocal(newDeletedState);
      return newDeletedState;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
