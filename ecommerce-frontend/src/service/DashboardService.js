const dashboard = async () => {

    const admintoken = localStorage.getItem("adminToken");

    const response = await fetch("http://localhost:5000/admin/dashboard", {
        method: "GET",

        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${admintoken}`
        }
    });

   return  await response.json();

   
};

export default {dashboard};