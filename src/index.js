import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";

import "./index.css";

import Phonebook from "./components/Phonebook/PhonebookContainer";

render(
  <Provider store={store}>
    <Phonebook />
  </Provider>,
  document.getElementById("root"),
);
