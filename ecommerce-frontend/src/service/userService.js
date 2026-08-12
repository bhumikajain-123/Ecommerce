const getUsers = async () => {

    const token = localStorage.getItem("adminToken");

    const response = await fetch("http://localhost:5000/admin/user", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    return await response.json();
};
const getUserById = async (id) => {

    const token = localStorage.getItem("adminToken");

    const response = await fetch(`http://localhost:5000/admin/user/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    return await response.json();
};




const deleteUser = async (id) =>{

      const token = localStorage.getItem("adminToken");

    const response = await fetch(`http://localhost:5000/admin/user/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    return await response.json();

}



const editUser = async (id, formData) => {

    const token = localStorage.getItem("adminToken");

    const response = await fetch(
        `http://localhost:5000/admin/user/${id}`,
        {
            method: "PUT",

            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },

            body: JSON.stringify(formData)
        }
    );

    return await response.json();
};

export default {
    getUsers,getUserById,deleteUser,editUser
};

