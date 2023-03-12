import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) throw Error("Something went wrong in Auth");
  return context;
};
