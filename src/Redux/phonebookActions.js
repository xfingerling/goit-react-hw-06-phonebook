import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { formatedNumber } from "../helpers";

export const addContact = createAction("contacts/add", ({ name, number }) => ({
  payload: {
    name,
    number: formatedNumber(number),
    id: nanoid(),
  },
}));

export const deleteContact = createAction("contacts/delete", (id) => ({
  payload: { id },
}));

export const addContactsToLS = createAction(
  "contacts/addToLocalStorage",
  (contacts) => ({ payload: contacts }),
);

export const filterContacts = createAction("contacts/filter");
