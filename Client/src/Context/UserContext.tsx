import { useState, createContext, useEffect } from "react";
import useApi from "../hooks/useApi";
import { UserModel } from "../Models/UserModel";

export const UserContext = createContext<UserModel | undefined>(undefined);

export const UserContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<UserModel>({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
  });

  const api = useApi("user");

  useEffect(() => {
    api
      .GET()
      .then(({ data }: any) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
