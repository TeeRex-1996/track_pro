
import {AuthAction, AuthActionType, AuthState} from "../types/auth.js";
export const initialState : AuthState = {
  user: null,
  isAuthenticated: false,
};

export const loginReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionType.LOGIN:
      return {
        ...state,
        user: action.payload || null,
        isAuthenticated: true,
      };
    case AuthActionType.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
