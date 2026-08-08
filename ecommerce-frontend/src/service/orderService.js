const token = localStorage.getItem("token");

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

  

export default {
  placeOrder,createOrderItems,getOrder,getMyOrders
};