import axiosClient from "./axiosClient";

const authApi = {
  login(data) {
    return axiosClient.post("/auth/login", data);
  },
  loginByPassword(username, password) {
    return this.login({ username, password });
  },
  me() {
    return axiosClient.get("/auth/me");
  },
  register(username, email, password) {
    return axiosClient.post("/auth/register", { username, email, password });
  },
};

export default authApi;
