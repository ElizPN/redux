const defaultState = {
  login: false,
};

const reducer = (state = defaultState, action) => {
  if (action.type == "LOGIN") {
    return (state = { login: true });
  } else {
    return state;
  }
};

const store = Redux.createStore(reducer);
// action creater returns action with type "LOGIN"
const loginAction = () => {
  return {
    type: "LOGIN",
  };
};
