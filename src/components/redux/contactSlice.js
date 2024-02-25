// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [],
//   },
//   reducers: {
//     addContacts(state, action) {
//       state.contacts.push({
//         id: nanoid(),
//         name: action.payload.name,
//         number: action.payload.number,
//       });
//     },
//     deleteContact(state, action) {
//       state.contacts = action.payload;
//     },
//   },
// });

// Action generators
// to trigger addition, we need to create an action / pass it to UI / call it there
// and then the reducer will understand what event has occurred
// accessing our slice and invoking actions through dot notation (automatically created)
// export const { addContacts, deleteContact } = contactSlice.actions;

// Retrieve the reducer, which is what we connect to the store
// contactSlice.reducer - the root reducer - which is formed from our reducers
// export const contactReducer = contactSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [], // Змінено ім'я з `contacts` на `items`
  },
  reducers: {
    addContact(state, action) {
      state.items.push({
        // Змінено ім'я з `addContacts` на `addContact`
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      ); // Змінено ім'я з `deleteContact` на `deleteContact`
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions; // Змінено з `addContacts` на `addContact`
export const contactReducer = contactSlice.reducer;
