import {combineReducers} from "redux";

// comments
function comments(state = [], action) {
  if(action.type === "COMMENTS_FETCHED") {
    return action.value;
  }
  if(action.type === "COMMENTS_CREATED") {
    return [...state,action.value];
  }
  return state;
}

// vehicles

function vehicles(state = [], action) {
  if(action.type === "VEHICLES_FETCHED") {
    return action.value;
  }
  if(action.type === "VEHICLES_CREATED") {
    return [...state,action.value];
  }
  return state;
}

// contacts

function contacts(state = [], action) {
  if(action.type === "CONTACTS_FETCHED") {
    return action.value;
  }
  if(action.type === "CONTACTS_CREATED") {
    return [...state,action.value];
  }
  return state;
}

// products

function products(state = [], action) {
  if(action.type === "PRODUCTS_FETCHED") {
    return action.value;
  }
  if(action.type === "PRODUCTS_CREATED") {
    return [...state,action.value];
  }
  return state;
}

const rootReducer = combineReducers({
  comments, vehicles, contacts, products
});
export default rootReducer;
