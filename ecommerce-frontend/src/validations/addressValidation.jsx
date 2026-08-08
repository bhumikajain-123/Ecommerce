export const validate = (formData) => {
    let newErrors = {};

    // Full Name
    if (formData.fullName.trim() === "") {
      newErrors.fullName = "Full Name is required";
    }

  
    if (formData.addressLine.trim() === "") {
      newErrors.addressLine = "Address is required";
    } 

    // Phone
    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    // city
    if (formData.city === "") {
      newErrors.city = "city is required";
    } 

   
    if (formData.state === "") {
      newErrors.state = "State is required";
    } 

    if(formData.pincode === ""){
      newErrors.pincode = "Pincode is required";
    }

    if(formData.country === ""){
      newErrors.country = "Country is required";
    }

   return newErrors;
  };

  
