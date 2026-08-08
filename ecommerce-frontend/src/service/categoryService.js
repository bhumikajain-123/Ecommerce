const token = localStorage.getItem("token");

const filtercategory = async (id) => {
    const response = await fetch(
        `http://localhost:5000/product/category/${id}`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }
    );

return  await response.json();

  
};
export default {filtercategory};