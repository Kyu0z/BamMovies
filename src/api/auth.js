import axiosClient from "./axiosClient";

const authApi = {
  async login(data) {
    // return axiosClient.post("/auth/login", data);
    await new Promise((done) => setTimeout(done, 1000));
    return {
      success: true,
      data: {
        user: {
          name: "Fake User",
        },
        token: "token_fake",
      },
    };
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
