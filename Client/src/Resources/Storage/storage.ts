import { UserModel } from "../../Models/UserModel";

export const getUser = (): UserModel | undefined => {
  const user = sessionStorage.getItem("user");
  return user ? JSON.parse(user) : undefined;
};

export const setUser = (user: UserModel): void => {
  sessionStorage.setItem("user", JSON.stringify(user));
};

export const login = (accessToken: string): void => {
  sessionStorage.setItem("accessToken", JSON.stringify(accessToken));
};

export const logout = (): void => {
  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("user");
};

export const getAccessToken = (): string | undefined => {
  const accessToken = sessionStorage.getItem("accessToken");
  return accessToken ? accessToken : undefined;
};
