const token = localStorage.getItem("token");
const admintoken = localStorage.getItem("adminToken");
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


//   ---------------------------admin side category -------------------



    const addCategory = async (formData) =>{
        const response = await fetch(
        `http://localhost:5000/admin/category`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${admintoken}`,
                "Content-Type": "application/json"
            },
            body : JSON.stringify(formData)
        }
    );

return  await response.json();

    }

    const getCategory = async() =>{
        const response = await fetch(
        `http://localhost:5000/admin/category`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${admintoken}`,
                "Content-Type": "application/json"
            }
        }
    );

return  await response.json();
    }

    const getCategoryById = async(id) =>{


        const response = await fetch(
        `http://localhost:5000/admin/category/${id}`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${admintoken}`,
                "Content-Type": "application/json"
            }
        }
    );

return  await response.json();
    }

    const updateCategory = async (id,formData) => {
         const response = await fetch(
        `http://localhost:5000/admin/category/${id}`,
        {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${admintoken}`,
                "Content-Type": "application/json"
            },
            body : JSON.stringify(formData)
        }
    );

   return  await response.json();
    }

    const deleteCategory = async (id) =>{

         const response = await fetch(
        `http://localhost:5000/admin/category/${id}`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${admintoken}`,
                "Content-Type": "application/json"
            },
            
        }
    );

   return  await response.json();
    }
    

export default {filtercategory,addCategory,getCategory,getCategoryById,updateCategory,deleteCategory};