"use client"

import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
      case "LOGOUT":
        return {
          user: null,
        };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const initialState = {
    user: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const loggedin = localStorage.getItem('user');
    if (loggedin) {
      dispatch({ type: "LOGIN", payload: loggedin });
    }
  }, []);

  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
