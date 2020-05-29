import { configureStore } from "@reduxjs/toolkit";

import { contactsReducer, filterReducer } from "./phonebookReducer";

const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
});

export default store;
