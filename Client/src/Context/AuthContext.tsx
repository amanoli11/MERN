import { createContext, useReducer } from "react";

export const AuthContext = createContext<{
  state: any;
  dispatch: (action: { type: string; payload: any }) => void;
}>({
  state: null,
  dispatch: () => {},
});

export const AuthReducer = (
  state: any,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    user: null,
  });

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
