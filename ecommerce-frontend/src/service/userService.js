import { api } from "./api";

const getUsers = () => {
  return api("/admin/user");
};

const getUserById = (id) => {
  return api(`/admin/user/${id}`);
};

const deleteUser = (id) => {
  return api(`/admin/user/${id}`, {
    method: "DELETE",
  });
};

const editUser = (id, formData) => {
  return api(`/admin/user/${id}`, {
    method: "PUT",
    body: JSON.stringify(formData),
  });
};

export default {
  getUsers,
  getUserById,
  deleteUser,
  editUser,
};
