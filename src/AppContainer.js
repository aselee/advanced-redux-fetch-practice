import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import { fetchContacts, fetchVehicles,
  fetchComments, fetchProducts } from './actions'


function mapDispatchToProps(dispatch) {
  return {
    loadContacts() {
      const action = fetchContacts();
      dispatch(action)
    },
    loadVehicles() {
      const action = fetchVehicles();
      dispatch(action)
    },
    loadComments() {
      const action = fetchComments();
      dispatch(action)
    },
    loadProducts() {
      const action = fetchProducts();
      dispatch(action)
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
