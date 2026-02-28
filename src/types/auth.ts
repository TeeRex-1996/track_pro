export interface User {
  id: string;
  fullname: string;
  email: string;
  role: string;
  confirm_password: string;
  password: string;
  phone: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export enum AuthActionType {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

export interface AuthAction {
  type: AuthActionType;
  payload : User | null;
}

export interface AuthenticationContextType {
 isAuthenticated: boolean;
}

export interface AuthContextType extends AuthenticationContextType {
  user: User | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

export interface LoginFormValues {
  email: string;
  password: string;
}