import apiConfig from "./apiConfig";
import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) =>
    queryString.stringify({ ...params, api_key: apiConfig.api_key }),
});

axiosClient.interceptors.request.use(async (config) => {
  //slove token;

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (error) => {
    throw error;
  }
);

export const setAPIToken = ({ token_type, access_token }) => {
  axiosClient.defaults.headers.Authorization = `${token_type} ${access_token}`;
};

export default axiosClient;
