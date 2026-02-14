import { createContext, useEffect, useReducer } from "react";
import { intaialState, loginReducer } from "../reducers/LoginReducer";
export const LoginContext = createContext();

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(loginReducer, intaialState);
  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    const expiry = localStorage.getItem("expiry");
    if (user && token && Number(expiry) > Date.now()) {
      dispatch({ type: "Login", payload: JSON.parse(user) });
    } else {
      localStorage.clear();
    }
  }, []);

  const login = (user, token) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("expiry", Date.now() + 10 * 60 * 1000);
    dispatch({ type: "Login", payload: user });
  };

  const logout = () => {
    localStorage.clear();
    dispatch({ type: "Logout" });
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
