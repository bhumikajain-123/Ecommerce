 
 const token = localStorage.getItem("token");

const addToCart = async (productId, price) => {
 

  const response = await fetch("http://localhost:5000/cartItem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      productId,
      quantity: 1,
      price
    })
  });

  return await response.json();
};

const getToCart =async()=>{
  
  const response = await fetch("http://localhost:5000/cartItem",{
    method : "GET",
    headers : {
     Authorization: `Bearer ${token}`
    },
  });
  return await response.json();
}

const updateQuantity = async (id,action)=>{
  const response = await fetch(`http://localhost:5000/cartItem/quantity/${id}`,{

    method : "PUT",
    headers : {
       "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
body : JSON.stringify({ action }),
  }
);
return await response.json();
}

const removeItem = async (id)=>{
  const response = await  fetch(`http://localhost:5000/cartItem/${id}`,{

method : "DELETE",
 headers : {
       "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },


  });
  return await response.json();
}
export default { addToCart,getToCart,updateQuantity,removeItem};