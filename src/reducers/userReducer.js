const ADD = "ADD";
const defaultState = {
  username: ""
};
export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD:
      const newState = Object.assign({}, defaultState, action.user);
      return newState;
      // eslint-disable-next-line
      break;
    default:
      return state;
  }
};
