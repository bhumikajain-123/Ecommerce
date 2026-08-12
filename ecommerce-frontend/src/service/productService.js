

const admintoken = localStorage.getItem("adminToken");

// -------filter by category ---------------------


const getcategory = async (id) =>{
        const response = await fetch(
        `http://localhost:5000/admin/product/category/${id}`,
        {
            method: "GET",

            headers: {
                Authorization: `Bearer ${admintoken}`,
                "Content-Type": "application/json"
            },

        }
    );

    return await response.json();

}
// Add product
const addProduct = async (formData) => {

    const response = await fetch(
        `http://localhost:5000/admin/product`,
        {
            method: "POST",

            headers: {
                Authorization: `Bearer ${admintoken}`,
                "Content-Type": "application/json"
            },

            body: JSON.stringify(formData)
        }
    );

    return await response.json();
};


// Get all products for admin
const getProductsAdmin = async () => {

    const response = await fetch(
        `http://localhost:5000/admin/product`,
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


// Get product by ID for admin
const getProductById = async (id) => {

    const response = await fetch(
        `http://localhost:5000/admin/product/${id}`,
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


// Update product
const updateProduct = async (id, formData) => {

    const response = await fetch(
        `http://localhost:5000/admin/product/${id}`,
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


// Delete product
const deleteProduct = async (id) => {

    const response = await fetch(
        `http://localhost:5000/admin/product/${id}`,
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
   

    addProduct,
    getProductsAdmin,
    getProductById,
    updateProduct,
    deleteProduct,getcategory

};