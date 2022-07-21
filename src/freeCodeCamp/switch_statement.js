const defaultState = {
  authenticated: false,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      state = { authenticated: true };
      break;

    case "LOGOUT":
      state = { authenticated: false };
      break;

    default:
      state = defaultState;
  }
  return state;
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: "LOGIN",
  };
};

const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};
