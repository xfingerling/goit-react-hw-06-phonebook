import { connect } from "react-redux";
import * as phonebookActions from "../../Redux/phonebookActions";

import contactList from "./ContactList";

const mapStateToProps = (state) => ({
  contacts: state.contacts,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(phonebookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(contactList);
