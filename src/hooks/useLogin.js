import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const { dispatch,state} = useAuthContext();

  const login = (user) => {
    localStorage.setItem("user",user)
    if (user == "admin") {
      dispatch({ type: "LOGIN", payload: user });
    }
    if (user == "club") {
      dispatch({ type: "LOGIN", payload: user });
    }
  };

  return { login };
};
