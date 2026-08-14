import { api } from "./api";

// Add address
const addAddress = (formData) => {
  return api("/address", {
    method: "POST",
    body: JSON.stringify(formData),
  });
};

// Get all addresses
const getAddress = () => {
  return api("/address");
};

// Update address
const updateAddress = (id, formData) => {
  return api(`/address/${id}`, {
    method: "PUT",
    body: JSON.stringify(formData),
  });
};

// Get address by ID
const getAddressById = (id) => {
  return api(`/address/${id}`);
};

export default {
  addAddress,
  getAddress,
  updateAddress,
  getAddressById,
};
