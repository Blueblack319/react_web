import axios from "axios";

export const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

instance.defaults.headers.common["Authorization"] = "AUTH_TOKEN_INSTANCE";

instance.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
