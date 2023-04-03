// import { addContact, deleteContact } from './actions';
import { createReducer } from '@reduxjs/toolkit';
import { setFilter, addContact, deleteContact } from './actions';

const INITAIL_VALUE = [
  { name: 'Welcome to', number: '1234-567801', id: 'qucrmobV8' },
  { name: 'ContactBook application', number: '1234-5678', id: 'qucrmobV9' },
];
const contactsLocalStorage = localStorage.getItem('contacts');
const parsedContacts = JSON.parse(contactsLocalStorage);
const contactsInitialState = parsedContacts
  ? [...parsedContacts]
  : INITAIL_VALUE;

const saveToLocal = state => {
  localStorage.setItem('contacts', JSON.stringify(state));
};

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    const newState = [...state, action.payload];
    saveToLocal(newState);
    return newState;
  },
  [deleteContact]: (state, action) => {
    const newDeletedState = state.filter(
      contact => contact.id !== action.payload
    );
    saveToLocal(newDeletedState);
    return newDeletedState;
  },
});

// export const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact':
//       const newState = [...state, action.payload];
//       saveToLocal(newState);
//       return newState;
//     case 'contacts/deleteContact':
//       const newDeletedState = state.filter(
//         contact => contact.id !== action.payload
//       );
//       saveToLocal(newDeletedState);
//       return newDeletedState;
//     default:
//       return state;
//   }
// };

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, {
  [setFilter]: (_, action) => {
    return action.payload;
  },
});
