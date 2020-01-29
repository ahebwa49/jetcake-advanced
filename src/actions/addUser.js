const ADD = "ADD";

export const addUser = user => {
  return {
    type: ADD,
    user: user
  };
};
