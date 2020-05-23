import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";

import "./index.css";

import Phonebook from "./components/Phonebook/PhonebookContainer";

const App = () => <Phonebook />;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);