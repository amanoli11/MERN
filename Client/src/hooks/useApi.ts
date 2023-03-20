import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useApi = (controllerName: string) => {
  const URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const http = axios.create({
    baseURL: `${URL}/${controllerName}`,
    timeout: 6000,
    headers: {
      Authorization: `Bearer ${
        sessionStorage.getItem("accessToken") ?? undefined
      }`,
      // BranchId: `${user?.branchId ?? localStorage.getItem('branchId')}`
    },
  });

  const GET = async (url = "") => {
    return await http
      .get(url)
      .then(({ data }) => {
        message.success("Data fetched successfully");
        return data;
      })
      .catch((err) => {
        message.error(err.message);
        return err;
      });
  };

  const POST = async <T>(
    url: string,
    data: T,
    options?: { navigateTo: string }
  ) => {
    return await http
      .post(url, data)
      .then(({ data }) => {
        message.success(data.message);
        options?.navigateTo && navigate(options.navigateTo);
        return data;
      })
      .catch((err) => {
        message.error(err.message);
        return err;
      });
  };

  const UPDATE = () => {};

  return { GET, POST, UPDATE };
};

export default useApi;
// export interface ApiHelper {
//   get: <T>(url: string) => Promise<T>;
// }

// const BASE_API_URL = "https://localhost:5000";

// const UseApi = (featureName: string) => {
//   const http = axios.create({
//     baseURL: `${BASE_API_URL}/${featureName}`,
//   });
//   const api = {} as ApiHelper;

//   api.get = async (url: string) => {
//     return await http.get(url);
//   };

//   return api;
// };

// export default UseApi;
