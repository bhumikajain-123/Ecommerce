const loginService =   {
 
  login: async (email, password) => {
    try {
    const response = await fetch('http://localhost:5000/user/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
   const data = await response.json();
 if (!response.ok) {
  throw new Error(data.message || "Login failed");
}
    return data;

}catch (error) {
    console.error("Error during login:", error);

    return { error: error.message };
}
  },
};

export default loginService;