 const token = localStorage.getItem("token");
const addAddress = async (formdata)=>{

    const response = await fetch("http://localhost:5000/address",{

        method : "POST",
       headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
            body: JSON.stringify(formdata)
        
    });
return await response.json();
}

const getAddress = async()=>{

    const response =  await fetch("http://localhost:5000/address",{

        method : "GET",
       headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
           
        
    });
return await response.json();
}
const updateAddress = async (id, formData) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`http://localhost:5000/address/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  });

  return await response.json();
};


const getAddressById = async (id) =>{
 const token = localStorage.getItem("token");

  const response = await fetch(`http://localhost:5000/address/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
   
  });

  return await response.json();
};

export default { addAddress,getAddress,updateAddress,getAddressById };