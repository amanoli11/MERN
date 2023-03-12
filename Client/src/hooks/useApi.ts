import axios from "axios";

export interface ApiHelper {
  get: <T>(url: string) => Promise<T>;
}

const BASE_API_URL = "https://localhost:5000";

const UseApi = (featureName: string) => {
  const http = axios.create({
    baseURL: `${BASE_API_URL}/${featureName}`,
  });
  const api = {} as ApiHelper;

  api.get = async (url: string) => {
    return await http.get(url);
  };

  return api;
};

export default UseApi;
