export const intaialState = {
  user: null,
  isAuthenticated: false,
};

export const loginReducer = (state, action) => {
  switch (action.type) {
    case "Login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "Logout":
      return intaialState;
    default:
      return state;
  }
};
