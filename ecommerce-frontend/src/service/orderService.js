import { api } from "./api";

// ================= USER SIDE =================

// Place order
const placeOrder = (addressId, paymentMethod) => {
  return api(`/order/${addressId}`, {
    method: "POST",
    body: JSON.stringify({
      paymentMethod,
    }),
  });
};

// Create order items
const createOrderItems = (orderId) => {
  return api(`/orderItem/${orderId}`, {
    method: "POST",
  });
};

// Get order
const getOrder = (orderId) => {
  return api(`/orderItem/${orderId}`);
};

// Get my orders
const getMyOrders = () => {
  return api("/order/my-orders");
};


// ================= ADMIN SIDE =================

// Get all orders
const getOrdersAdmin = () => {
  return api("/admin/order", {
    admin: true,
  });
};

// Get order by ID
const getOrderByIdAdmin = (id) => {
  return api(`/admin/order/${id}`, {
    admin: true,
  });
};



const verifyPayment = async (paymentData) => {
const token = localStorage.getItem("token");
    const response = await fetch(
        "http://localhost:5000/order/verify-payment",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },

            body: JSON.stringify(paymentData)
        }
    );

    const data = await response.json();

    return data;
};

// Update order status
const updateOrder = (id, status) => {
  return api(`/admin/order/${id}/status`, {
    method: "PUT",
    admin: true,
    body: JSON.stringify({
      status,
    }),
  });
};

// Delete order
const deleteOrder = (id) => {
  return api(`/admin/order/${id}`, {
    method: "DELETE",
    admin: true,
  });
};

// Get product/order item
const getProduct = (id) => {
  return api(`/admin/order/orderItem/${id}`, {
    admin: true,
  });
};


export default {
  placeOrder,
  createOrderItems,
  getOrder,
  getMyOrders,
  getOrdersAdmin,
  getOrderByIdAdmin,
  updateOrder,
  deleteOrder,
  getProduct,verifyPayment
};
