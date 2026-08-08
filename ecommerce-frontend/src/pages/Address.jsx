import { useState } from "react";
import addressService from "../service/addressService";
import { validate } from "../validations/addressValidation";
import { useNavigate } from "react-router-dom";
function Address() {
  const Navigate = useNavigate();
  const [error, setError] = useState({});

  const [formData, setFormData] = useState({
    fullName: "",
    addressLine: "",
    phone: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError({
      ...error,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newError = validate(formData);

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    try {
      const data = await addressService.addAddress(formData);
      console.log(data);

      alert("Address Saved Successfully");
      Navigate("/order");
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">

          <div className="card shadow-lg border-0 rounded-4">

            <div className="card-header bg-primary text-white py-3">
              <h3 className="mb-0">📍 Add Delivery Address</h3>
            </div>

            <div className="card-body p-4">

              <form onSubmit={handleSubmit}>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">
                      Full Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter full name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />

                    <p className="text-danger">
                      {error.name}
                    </p>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />

                    <p className="text-danger">
                      {error.phone}
                    </p>
                  </div>

                  <div className="col-12 mb-3">
                    <label className="form-label fw-bold">
                      Address
                    </label>

                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="House No., Street, Area"
                      name="addressLine"
                      value={formData.addressLine}
                      onChange={handleChange}
                    ></textarea>

                    <p className="text-danger">
                      {error.addressLine}
                    </p>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">
                      City
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />

                    <p className="text-danger">
                      {error.city}
                    </p>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">
                      State
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    />

                    <p className="text-danger">
                      {error.state}
                    </p>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">
                      Pincode
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                    />

                    <p className="text-danger">
                      {error.pincode}
                    </p>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">
                      Country
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    />

                    <p className="text-danger">
                      {error.country}
                    </p>
                  </div>

                </div>

                <hr />

                <div className="d-flex justify-content-end gap-3">

                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary px-4"
                  >
                    💾 Save Address
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Address;