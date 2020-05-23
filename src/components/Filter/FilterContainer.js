import { connect } from "react-redux";
import * as phonebookActions from "../../Redux/phonebookActions";

import Filter from "./Filter";

const mapStateToProps = (state) => ({
  value: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onFilter: (value) => dispatch(phonebookActions.filterContacts(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
