import { useState } from "react"
import  loginService  from "../service/loginService";

function Login() {

const [error, setError] = useState({});
const [formData, setFormData] = useState({
  email: "",
  password: "",
});

const handleSubmit = async (e) => {
  e.preventDefault();
  if(!validateForm()) {
    return;
  }
  const { email, password } = formData;
  const loginData = await loginService.login(email, password);
  if(loginData.error) {
    setError({server:loginData.error});
  }else{
    alert(loginData.message);
    localStorage.setItem("token", loginData.token);
  }
  
}
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value

  });
};

const validateForm = () => {
    const errors = {};
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!formData.email) {
        errors.email = "Email is required";
    }else if(!emailRegex.test(formData.email)) {
        errors.email = "Invalid email format";
    }
    if(!formData.password) {
        errors.password = "Password is required";
    }

setError(errors);
return Object.keys(errors).length === 0;
}





    return (
       <>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email"value = {formData.email} onChange = {handleChange} />
        <p style={{ color: "red" }}>{error.email}</p>

        <label>Password:</label>
        <input type="password" name="password" value = {formData.password} onChange = {handleChange} />
      <p style={{ color: "red" }}>{error.password}</p>

        <button type="submit">Login</button>
      </form>
        <p style={{ color: "red" }}>{error.server}</p>
       </>
    );
}
export default Login;