const ADD = "ADD";

const addMessage = (message) => {
  return {
    type: ADD,
    message,
  };
};

const messageReducer = (initialsState = [], action) => {
  console.log(action.message);
  switch (action.type) {
    case ADD:
      return [...initialsState, action.message];

    default:
      return initialsState;
  }
};

const store = Redux.createStore(messageReducer);
