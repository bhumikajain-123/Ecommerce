import { api } from "./api";

// Filter products by category
const getcategory = (id) => {
  return api(`/admin/product/category/${id}`);
};

// Add product
const addProduct = (formData) => {
  return api("/admin/product", {
    method: "POST",
    body: JSON.stringify(formData),
  });
};

// Get all products for admin
const getProductsAdmin = () => {
  return api("/admin/product");
};

// Get product by ID for admin
const getProductById = (id) => {
  return api(`/admin/product/${id}`);
};

// Update product
const updateProduct = (id, formData) => {
  return api(`/admin/product/${id}`, {
    method: "PUT",
    body: JSON.stringify(formData),
  });
};

// Delete product
const deleteProduct = (id) => {
  return api(`/admin/product/${id}`, {
    method: "DELETE",
  });
};

export default {
  getcategory,
  addProduct,
  getProductsAdmin,
  getProductById,
  updateProduct,
  deleteProduct,
};
