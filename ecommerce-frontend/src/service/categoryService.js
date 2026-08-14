import { api } from "./api";

// User side - filter products by category
const filtercategory = (id) => {
  return api(`/product/category/${id}`);
};

// Admin - add category
const addCategory = (formData) => {
  return api("/admin/category", {
    method: "POST",
    admin: true,
    body: JSON.stringify(formData),
  });
};

// Admin - get all categories
const getCategory = () => {
  return api("/admin/category", {
    admin: true,
  });
};

// Admin - get category by ID
const getCategoryById = (id) => {
  return api(`/admin/category/${id}`, {
    admin: true,
  });
};

// Admin - update category
const updateCategory = (id, formData) => {
  return api(`/admin/category/${id}`, {
    method: "PUT",
    admin: true,
    body: JSON.stringify(formData),
  });
};

// Admin - delete category
const deleteCategory = (id) => {
  return api(`/admin/category/${id}`, {
    method: "DELETE",
    admin: true,
  });
};

export default {
  filtercategory,
  addCategory,
  getCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
