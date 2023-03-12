import { message } from "antd";
import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { SignupModel } from "../Models/SignupModel";

export const useSignup = () => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const context = useContext(AuthContext);
  if (!context) throw Error("Error!!!");

  const signup = async (props: SignupModel) => {
    setLoading(true);
    setError("");

    await axios
      .post("/user/signup", { ...props })
      .then(({ data }) => {
        // saving user token to local storage
        localStorage.setItem("userToken", JSON.stringify(data.token));
        // localStorage.clear();
        context.dispatch({ type: "LOGIN", payload: data.data });
        navigate("/");
      })
      .catch(({ response }) => setError(response.data.message))
      .finally(() => setLoading(false));
  };

  return { signup, loading, error };
};
