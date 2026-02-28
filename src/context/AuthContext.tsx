import { createContext, Reducer, useEffect, useReducer } from "react";
import { initialState, loginReducer } from "../reducers/LoginReducer";
import { AuthAction, AuthActionType, AuthContextType, AuthState, User } from "../types/auth";
import { TOKEN_EXPIRY_MS } from "../types/constants";
export const LoginContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

const AuthContext : React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    const expiry = localStorage.getItem("expiry");
    if (user && token && Number(expiry) > Date.now()) {
      dispatch({ type: AuthActionType.LOGIN, payload: JSON.parse(user) as User });
    } else {
      localStorage.clear();
    }
  }, []);

  const login = (user :User, token : string) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("expiry",(Date.now() + TOKEN_EXPIRY_MS).toString());
    dispatch({ type: AuthActionType.LOGIN, payload: user });
  };

  const logout = () => {
    localStorage.clear();
    dispatch({ type: AuthActionType.LOGOUT, payload: null });
  };

  return (
    <LoginContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default AuthContext;
