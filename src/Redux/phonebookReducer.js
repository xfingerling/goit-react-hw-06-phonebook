import { combineReducers } from "redux";
import Type from "./ActionTypes";

import { isUniqueName } from "../helpers";

const initialContactsState = [
  // { id: "1", name: "dima", number: "32132" },
  // { id: "2", name: "dasha", number: "654654" },
  // { id: "3", name: "cat", number: "32132" },
  // { id: "4", name: "dog", number: "654654" },
];

const contactsReducer = (state = initialContactsState, { type, payload }) => {
  switch (type) {
    case Type.ADD_CONTACT:
      if (!isUniqueName(state, payload)) {
        alert(`${payload.name} is already exist`);
        return state;
      }
      return [...state, payload];

    case Type.DELETE_CONTACT:
      return state.filter((el) => el.id !== payload.id);

    case Type.ADD_CONTACTS_TO_LS:
      return [...payload];

    default:
      return state;
  }
};

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case Type.FILTER_CONTACTS:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
