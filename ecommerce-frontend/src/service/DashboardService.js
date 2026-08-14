import { api } from "./api";

const dashboard = () => {
  return api("/admin/dashboard", {
    admin: true,
  });
};

export default {
  dashboard,
};
