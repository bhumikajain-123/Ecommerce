
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import addressService from "../service/addressService";

function EditAddress() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    addressLine: "",
    city: "",
    state: "",
    pincode: "",
    phone: ""
  });


  // Get address
  useEffect(() => {

    const loadAddress = async () => {

      try {

        const data = await addressService.getAddressById(id);

        setFormData(data.address);

      } catch (error) {

        console.log(error);

      }

    };

    loadAddress();

  }, [id]);


  // Handle input change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  // Update address
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await addressService.updateAddress(id, formData);

      alert("Address updated successfully");

      navigate("/order");

    } catch (error) {

      console.log(error);

    }

  };


  return (

    <div className="container mt-4">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow border-0 rounded-4">

            <div className="card-body p-4">


              {/* ================= HEADING ================= */}

              <div className="d-flex align-items-center mb-3">

                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "42px",
                    height: "42px"
                  }}
                >
                  
                </div>

                <div>

                  <h5 className="fw-bold text-dark mb-0">
                    Edit Address
                  </h5>

                  <small className="text-secondary">
                    Update your delivery details
                  </small>

                </div>

              </div>


              <hr className="mt-2 mb-3" />


              {/* ================= FORM ================= */}

              <form onSubmit={handleSubmit}>


                {/* Full Name */}

                <div className="mb-3">

                  <label className="form-label fw-semibold mb-1">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    className="form-control form-control-sm"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter full name"
                  />

                </div>


                {/* Address */}

                <div className="mb-3">

                  <label className="form-label fw-semibold mb-1">
                    Address
                  </label>

                  <textarea
                    name="addressLine"
                    className="form-control form-control-sm"
                    rows="2"
                    value={formData.addressLine}
                    onChange={handleChange}
                    placeholder="Enter your address"
                  />

                </div>


                {/* City */}

                <div className="mb-3">

                  <label className="form-label fw-semibold mb-1">
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    className="form-control form-control-sm"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                  />

                </div>


                {/* State */}

                <div className="mb-3">

                  <label className="form-label fw-semibold mb-1">
                    State
                  </label>

                  <input
                    type="text"
                    name="state"
                    className="form-control form-control-sm"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Enter state"
                  />

                </div>


                {/* Pincode */}

                <div className="mb-3">

                  <label className="form-label fw-semibold mb-1">
                    Pincode
                  </label>

                  <input
                    type="text"
                    name="pincode"
                    className="form-control form-control-sm"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Enter pincode"
                  />

                </div>


                {/* Phone */}

                <div className="mb-4">

                  <label className="form-label fw-semibold mb-1">
                    Phone
                  </label>

                  <input
                    type="text"
                    name="phone"
                    className="form-control form-control-sm"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                  />

                </div>


                {/* ================= BUTTONS ================= */}

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  ✓ Update Address
                </button>

                <button
                  type="button"
                  className="btn btn-light border w-100 mt-2"
                  onClick={() => navigate("/order")}
                >
                  Cancel
                </button>


              </form>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default EditAddress;

