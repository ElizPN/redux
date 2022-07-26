const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
  switch (action.type) {
    case "REMOVE_ITEM":
      const newArr = [...state];

      const arrBeforeIndex = newArr.slice(0, action.index);
      const arrAfterIndex = newArr.slice(action.index + 1);
      const arrConcat = arrBeforeIndex.concat(arrAfterIndex);
      state = arrConcat;
      console.log(arrConcat);

      return state;
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: "REMOVE_ITEM",
    index,
  };
};

const store = Redux.createStore(immutableReducer);
