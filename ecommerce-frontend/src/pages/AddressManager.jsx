import { useEffect, useState } from "react";
import addressService from "../service/addressService";
import { useNavigate } from "react-router-dom";

function AddressManager() {

  const navigate = useNavigate();

  const [address, setAddress] = useState(null);

  useEffect(() => {

    const getAddress = async () => {

      try {

        const data = await addressService.getAddress();

        setAddress(data.address[0]);

        console.log(data);

      } catch (error) {

        console.log(error);

      }

    };

    getAddress();

  }, []);


  if (!address) {
    return (
      <div className="card shadow-sm border-0 rounded-4">
        <div className="card-body text-center">
          <p className="text-muted mb-0">
            No address found.
          </p>
        </div>
      </div>
    );
  }


  return (

    <div className="card shadow-sm border-0 rounded-4">

      {/* Header */}

      <div className="card-header bg-primary text-white rounded-top-4 p-3">

        <div className="d-flex justify-content-between align-items-center">

          <h5 className="mb-0">
            📍 Delivery Address
          </h5>

          <span className="badge bg-light text-primary">
            Saved
          </span>

        </div>

      </div>


      {/* Address Details */}

      <div className="card-body p-3">

        <h6 className="fw-bold mb-2">
          {address.fullName}
        </h6>


        <p className="text-secondary small mb-1">
          🏠 {address.addressLine}
        </p>


        <p className="text-secondary small mb-1">
          🏙️ {address.city}, {address.state}
        </p>


        <p className="text-secondary small mb-1">
          📮 {address.pincode}
        </p>


        <p className="text-secondary small mb-1">
          🌍 {address.country}
        </p>


        <p className="text-secondary small mb-0">
          📞 {address.phone}
        </p>


        <hr />


        {/* Edit Button */}

        <button
          className="btn btn-outline-primary btn-sm w-100"
          onClick={() => navigate("/address/edit")}
        >
          ✏️ Edit Address
        </button>

      </div>

    </div>

  );
}

export default AddressManager;