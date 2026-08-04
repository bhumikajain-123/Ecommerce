import { useState } from "react";
import { validate } from "../validations/registerValidation";
import { registerUser } from "../service/authService";
import "./Register.css";
import { Link } from "react-router-dom";


function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  

  const [errors, setErrors] = useState({});
  const[backendError,setBackendError] = useState({});

  // Update input values
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation
  const handleSubmit = async (e) => {
   
    e.preventDefault();
    const validationErrors = validate(formData);
      setErrors(validationErrors);
    if(Object.keys(validationErrors).length > 0) {
       return ;
    }
    try {
   const response =  await registerUser(formData);
   alert(response.message);
   setBackendError({});
  
  

}catch (error) {
    setBackendError({server:error.message});
    
    
  }
}
  
  
  
  return (
<div className="register-page">
  <div className="register-card">

    <div className="register-header">
      <h1>🛍️ ShopEase</h1>
      <h2>Create Your Account</h2>
      <p>Join us and enjoy a seamless shopping experience.</p>
    </div>

    {backendError.server && (
      <div className="server-error">
        {backendError.server}
      </div>
    )}

    <form onSubmit={handleSubmit}>

      <div className="input-group">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <span>{errors.name}</span>
      </div>

      <div className="input-group">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <span>{errors.email}</span>
      </div>

      <div className="input-group">
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <span>{errors.phone}</span>
      </div>

      <div className="input-group">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <span>{errors.password}</span>
      </div>

      <div className="input-group">
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <span>{errors.confirmPassword}</span>
      </div>

      <button className="register-btn">
        Create Account
      </button>

      <div className="login-link">
        Already have an account?
        <Link to="/login"> Login</Link>
      </div>

    </form>

  </div>
</div>
  );
}

export default Register;