import React, { Component } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import style from "./Phonebook.module.css";
import logoTransition from "../../transitions/logoTransition.module.css";

import ContactForm from "../ContactForm/ContactFormContainer";
import ContactList from "../ContactList/contactListContainer";
import Filter from "../Filter/FilterContainer";

export default class Phonebook extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
    addContactsToLS: PropTypes.func.isRequired,
  };

  state = {
    isLogoShow: false,
  };

  componentDidMount() {
    this.setState((state) => ({ isLogoShow: !state.isLogoShow }));

    const contactsLS = localStorage.getItem("contacts");

    if (contactsLS) {
      const { addContactsToLS } = this.props;
      const contacts = JSON.parse(contactsLS);

      addContactsToLS(contacts);
    }
  }

  componentDidUpdate(prevProps) {
    const { contacts } = this.props;

    if (prevProps.contacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  render() {
    const { isLogoShow } = this.state;
    const { contacts } = this.props;

    return (
      <div>
        <div className={style.logoWrap}>
          <CSSTransition
            in={isLogoShow}
            timeout={500}
            classNames={logoTransition}
          >
            <h2 className={style.logo}>Phonebook</h2>
          </CSSTransition>
        </div>

        <ContactForm />

        <h2 className={style.title}>Contacts</h2>

        <Filter isShow={contacts.length >= 2} />

        <ContactList />
      </div>
    );
  }
}
