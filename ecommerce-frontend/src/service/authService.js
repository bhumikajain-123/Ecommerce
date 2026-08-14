import { api } from "./api";

export const registerUser = (userData) => {
  return api("/user/register", {
    method: "POST",
    body: JSON.stringify(userData),
  });
};
