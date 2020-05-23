import uniqid from "uniqid";
import Type from "./ActionTypes";

export const addContact = (contact) => ({
  type: Type.ADD_CONTACT,
  payload: {
    name: contact.name,
    number: contact.number,
    id: uniqid(),
  },
});

export const deleteContact = (id) => ({
  type: Type.DELETE_CONTACT,
  payload: {
    id: id,
  },
});

export const addContactsToLS = (contacts) => ({
  type: Type.ADD_CONTACTS_TO_LS,
  payload: contacts,
});

export const filterContacts = (value) => ({
  type: Type.FILTER_CONTACTS,
  payload: value,
});
