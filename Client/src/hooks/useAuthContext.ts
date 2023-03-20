import { UserContext } from "../Context/UserContext";
import { useContext } from "react";

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) throw Error("Something went wrong in Auth");
  return context;
};
