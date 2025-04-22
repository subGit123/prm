import axios, {AxiosRequestConfig} from 'axios';

const BASE_URL = 'http://localhost:7777';
const DEFAULT_TIMEOUT = 30000;

//  HTTP client 설정
export const createClient = (consfig?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      'content-type': 'application/json',
    },
    withCredentials: true,
    ...consfig,
  });

  axiosInstance.interceptors.response.use(
    res => {
      return res;
    },
    err => {
      return Promise.reject(err);
    },
  );

  return axiosInstance;
};

export const httpClient = createClient();
