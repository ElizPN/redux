//The Provider component allows you to provide state and dispatch to your React components,
//but you must specify exactly what state and actions you want.

// In this function you declare what pieces of state you want to have access to

const state = [];

function mapStateToProps(state) {
  return { messages: state };
}
// Redux uses store.subscribe() for components that are mapped to state.
