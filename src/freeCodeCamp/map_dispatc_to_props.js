const addMessage = (message) => {
  return {
    type: "ADD",
    message: message,
  };
};

//The mapDispatchToProps() function is used to provide specific
//action creators to your React components so they can dispatch actions against the Redux store.

// It returns object each property returns a function that calls dispatch
// with an action creator and any relevant action data.

// We have access to dispath because we pass in it as a parametr to mapDispatchToProps().

function mapDispatchToProps(dispatch) {
  return {
    submitNewMessage: function (message) {
      dispatch(addMessage(message));
    },
  };
}

// Redux uses store.dispatch() to conduct these dispatches with mapDispatchToProps()
