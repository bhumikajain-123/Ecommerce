import { api } from "./api";

// Add product to cart
const addToCart = (productId, price) => {
  return api("/cartItem", {
    method: "POST",
    body: JSON.stringify({
      productId,
      quantity: 1,
      price,
    }),
  });
};

// Get cart
const getToCart = () => {
  return api("/cartItem");
};

// Update quantity
const updateQuantity = (id, action) => {
  return api(`/cartItem/quantity/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      action,
    }),
  });
};

// Remove item
const removeItem = (id) => {
  return api(`/cartItem/${id}`, {
    method: "DELETE",
  });
};

export default {
  addToCart,
  getToCart,
  updateQuantity,
  removeItem,
};
