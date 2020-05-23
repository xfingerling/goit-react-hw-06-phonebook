import { connect } from "react-redux";
import * as phonebookAction from "../../Redux/phonebookActions";

import Phonebook from "./Phonebook";

const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  addContactsToLS: (contacts) =>
    dispatch(phonebookAction.addContactsToLS(contacts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
