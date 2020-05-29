import { connect } from "react-redux";
import * as phonebookActions from "../../Redux/phonebookActions";

import ContactForm from "./ContactForm";

const mapStatetoProps = (state) => ({
  contacts: state.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  onAddContact: (contact) => dispatch(phonebookActions.addContact(contact)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(ContactForm);
