import { api } from "./api";

const loginService = {
  login: async (email, password) => {
    try {
      return await api("/user/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
    } catch (error) {
      console.error("Error during login:", error);
      return { error: error.message };
    }
  },
};

export default loginService;
