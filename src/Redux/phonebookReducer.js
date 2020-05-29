import { createReducer } from "@reduxjs/toolkit";

import * as phonebookActions from "./phonebookActions";

const initialContactsState = [
  // { id: "1", name: "dima", number: "32132" },
  // { id: "2", name: "dasha", number: "654654" },
  // { id: "3", name: "cat", number: "32132" },
  // { id: "4", name: "dog", number: "654654" },
];

const contactsReducer = createReducer(initialContactsState, {
  [phonebookActions.addContact]: (state, { payload }) => [...state, payload],
  [phonebookActions.deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload.id),
  [phonebookActions.addContactsToLS]: (state, { payload }) => [...payload],
});

const filterReducer = createReducer("", {
  [phonebookActions.filterContacts]: (state, { payload }) => payload,
});

export { contactsReducer, filterReducer };
