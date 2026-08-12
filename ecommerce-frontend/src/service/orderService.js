const token = localStorage.getItem("token");
const admintoken = localStorage.getItem("adminToken");
const placeOrder = async (addressId) => {

  const response = await fetch(
    `http://localhost:5000/order/${addressId}`,
    {
      method: "POST",

      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  return data;
};



const createOrderItems = async (orderId) => {

  const response = await fetch(
    `http://localhost:5000/orderItem/${orderId}`,
    {
      method: "POST",

      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  return data;
};

const getOrder = async (orderId) => {

  const response = await fetch(
    `http://localhost:5000/orderItem/${orderId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  return data;
};




const getMyOrders = async () => {

  const response = await fetch(
    "http://localhost:5000/order/my-orders",
    {
      method: "GET",

      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  const data = await response.json();

  return data;
};




// ================= ADMIN SIDE =================


// Get all orders
const getOrdersAdmin = async () => {

    const response = await fetch(
        `http://localhost:5000/admin/order`,
        {
            method: "GET",

            headers: {
                Authorization: `Bearer ${admintoken}`,
                "Content-Type": "application/json"
            }
        }
    );

    return await response.json();
};


// Get order by ID
const getOrderByIdAdmin = async (id) => {

    const response = await fetch(
        `http://localhost:5000/admin/order/${id}`,
        {
            method: "GET",

            headers: {
                Authorization: `Bearer ${admintoken}`,
                "Content-Type": "application/json"
            }
        }
    );

    return await response.json();
};


// Update order
const updateOrder = async (id, formData) => {

    const response = await fetch(
        `http://localhost:5000/admin/order/${id}`,
        {
            method: "PUT",

            headers: {
                Authorization: `Bearer ${admintoken}`,
                "Content-Type": "application/json"
            },

            body: JSON.stringify(formData)
        }
    );

    return await response.json();
};


// Delete order
const deleteOrder = async (id) => {

    const response = await fetch(
        `http://localhost:5000/admin/order/${id}`,
        {
            method: "DELETE",

            headers: {
                Authorization: `Bearer ${admintoken}`,
                "Content-Type": "application/json"
            }
        }
    );

    return await response.json();
};

  

export default {
  placeOrder,createOrderItems,getOrder,getMyOrders,

    getOrdersAdmin,
    getOrderByIdAdmin,
    updateOrder,
    deleteOrder
};