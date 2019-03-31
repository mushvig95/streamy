import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import _ from "lodash";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

const onAuthChange = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSignedIn: true, userId: action.payload };
    case "SIGN_OUT":
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};

const streamActions = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "CREATE_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "EDIT_STREAM":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_STREAM":
      return _.omit(state, action.payload);
    case "FETCH_ALL_STREAMS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    default:
      return state;
  }
};

export default combineReducers({
  authStat: onAuthChange,
  form: formReducer,
  streams: streamActions
});
