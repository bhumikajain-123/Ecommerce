export const validate = (formData) => {
    let newErrors = {};

    // Full Name
    if (formData.name.trim() === "") {
      newErrors.name = "Full Name is required";
    }

    // Email
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // Phone
    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    // Password
    if (formData.password === "") {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Confirm Password
    if (formData.confirmPassword === "") {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

   return newErrors;
  };

  // Submit
 

 

    // Backend API will be called here later.
