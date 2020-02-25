import { UserActionTypes } from "./user.types.js";

const INITIAL_STATE = {
  currentUser: null
};
//used only if currentState in userReducer fn parameter is undefined. New ES6 syntax

const userReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...currentState,
        currentUser: action.payload
      };
    default:
      return currentState;
  }
};

export default userReducer;

//this will export the latest state object to wherever it is called (here, in root reducer)
