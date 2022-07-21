//dispatch method is what you use to dispatch actions to the Redux store.
//Calling store.dispatch() and passing the value returned from an action creator sends an action back to the store.

// createStore - old way to create store, now you should use configureStore from Toolkit
const store = Redux.createStore((state = { login: false }) => state);

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};

store.dispatch(loginAction());
