import { connect } from "react-redux";
import * as phonebookActions from "../../Redux/phonebookActions";

import ContactForm from "./ContactForm";

const mapDispatchToProps = (dispatch) => ({
  onAddContact: (contact) => dispatch(phonebookActions.addContact(contact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
