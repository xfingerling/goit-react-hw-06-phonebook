import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./ContactForm.module.css";

import Notification from "../Notification/Notification";

import { isUniqueName } from "../../helpers";

const initialState = { name: "", number: "" };

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      }),
    ),
  };

  state = {
    ...initialState,
    isAlertShow: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { contacts } = this.props;

    if (isUniqueName(contacts, this.state.name)) {
      this.props.onAddContact({ ...this.state });
    } else {
      this.setState((state) => ({ isAlertShow: !state.isAlertShow }));

      setTimeout(() => {
        this.setState((state) => ({ isAlertShow: !state.isAlertShow }));
      }, 3000);
    }

    this.setState({ ...initialState });
  };

  handleChange = ({ target }) => {
    const name = target.name;
    let value = target.value;

    this.setState({ [name]: value });
  };

  render() {
    const { name, number, isAlertShow } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
            placeholder="Name"
            autoComplete="off"
          />
          <input
            className={styles.input}
            name="number"
            type="number"
            value={number}
            onChange={this.handleChange}
            placeholder="Number"
            autoComplete="off"
          />

          <button
            className={styles.btn}
            type="submit"
            disabled={!name || !number}
          >
            Add contact
          </button>
        </form>

        <Notification isShow={isAlertShow} text="Contact is already exist" />
      </>
    );
  }
}
