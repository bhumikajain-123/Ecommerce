import { api } from "./api";

const setLogin = (formData) => {
  return api("/admin/login", {
    method: "POST",
    body: JSON.stringify(formData),
  });
};

export default {
  setLogin,
};
