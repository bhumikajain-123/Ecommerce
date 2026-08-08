import { useEffect, useState } from "react";
import cartItemService from "../service/cartItemService";
import addressService from "../service/addressService";
import orderService from "../service/orderService";
import { useNavigate } from "react-router-dom";
function Order() {
const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {

    const loadData = async () => {

      try {

        // Get cart items
        const cartData = await cartItemService.getToCart();

        setCartItems(cartData.items);

        // Get addresses
        const addressData = await addressService.getAddress();

        setAddresses(addressData.address);

        // Select first address by default
        if (addressData.address.length > 0) {
          setSelectedAddress(addressData.address[0]);
        }

      } catch (error) {

        console.log(error);

      }

    };

    loadData();

  }, []);


  // Calculate total
  const itemsTotal = cartItems.reduce(
    (total, item) =>
      total + item.productId.price * item.quantity,
    0
  );

  const shipping = 0;
  const tax = 500;

  const grandTotal =
    itemsTotal + shipping + tax;


  const handlePlaceOrder =async () => {

    if (!selectedAddress) {
      alert("Please select a delivery address");
      return;
    }


    // Later:
    const data = await orderService.placeOrder(
    selectedAddress._id
  );

  console.log(data);

  const order  = await orderService.createOrderItems(data.placeItem._id);

  console.log(order);
 navigate(`/order/success/${data.placeItem._id}`);
  };


  return (

    <div className="container mt-5">

      <h2 className="fw-bold mb-4">
        📦 Order
      </h2>


      <div className="row g-4">


        {/* ================= LEFT SIDE ================= */}

        <div className="col-lg-8">

          <div className="card shadow-sm border-0 rounded-4">

            <div className="card-body">

              <h4 className="fw-bold mb-4">
                🛍️ Ordered Items
              </h4>


              {cartItems.map((item) => (

                <div
                  className="card border mb-3"
                  key={item._id}
                >

                  <div className="row g-0 align-items-center">


                    {/* Product Image */}

                    <div className="col-md-3 text-center p-3">

                      <img
                        src={item.productId.image}
                        alt={item.productId.name}
                        className="img-fluid rounded"
                        style={{
                          height: "130px",
                          width: "130px",
                          objectFit: "contain"
                        }}
                      />

                    </div>


                    {/* Product Details */}

                    <div className="col-md-9">

                      <div className="card-body">

                        <h5 className="fw-bold">
                          {item.productId.name}
                        </h5>

                        <p className="text-success fw-bold">
                          ₹{item.productId.price}
                        </p>

                        <p className="mb-1">
                          Quantity: {item.quantity}
                        </p>

                        <h6>
                          Subtotal: ₹
                          {item.productId.price *
                            item.quantity}
                        </h6>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="col-lg-4">


          {/* DELIVERY ADDRESS */}

          <div className="card shadow-sm border-0 rounded-4 mb-4">

            <div className="card-body">

              <h5 className="fw-bold">
                📍 Delivery Address
              </h5>

              <hr />


              {addresses.map((address) => (

                <div
                  key={address._id}
                  className={`border rounded-3 p-3 mb-3 ${
                    selectedAddress?._id === address._id
                      ? "border-primary bg-light"
                      : ""
                  }`}
                >

                  <div className="d-flex">

                    <input
                      type="radio"
                      name="address"
                      className="form-check-input me-2"
                      checked={
                        selectedAddress?._id === address._id
                      }
                      onChange={() =>
                        setSelectedAddress(address)
                      }
                    />

                    <div>

                      <h6 className="fw-bold mb-1">
                        {address.fullName}
                      </h6>

                      <p className="small text-secondary mb-1">
                        {address.addressLine}
                      </p>

                      <p className="small text-secondary mb-1">
                        {address.city}, {address.state}
                      </p>

                      <p className="small text-secondary mb-1">
                        {address.pincode}
                      </p>

                      <p className="small text-secondary mb-0">
                        📞 {address.phone}
                      </p>

                    </div>

                  </div>

                </div>

              ))}


              <button className="btn btn-outline-primary btn-sm w-100">
                + Add New Address
              </button>

            </div>

          </div>


          {/* ORDER SUMMARY */}

          <div className="card shadow-sm border-0 rounded-4">

            <div className="card-body">

              <h5 className="fw-bold">
                🧾 Order Summary
              </h5>

              <hr />


              <div className="d-flex justify-content-between mb-2">

                <span>
                  Items Total
                </span>

                <span>
                  ₹{itemsTotal}
                </span>

              </div>


              <div className="d-flex justify-content-between mb-2">

                <span>
                  Shipping
                </span>

                <span className="text-success">
                  Free
                </span>

              </div>


              <div className="d-flex justify-content-between mb-2">

                <span>
                  Tax
                </span>

                <span>
                  ₹{tax}
                </span>

              </div>


              <hr />


              <div className="d-flex justify-content-between">

                <h5 className="fw-bold">
                  Grand Total
                </h5>

                <h5 className="fw-bold text-success">
                  ₹{grandTotal}
                </h5>

              </div>


              <button
                className="btn btn-success w-100 mt-3"
                onClick={handlePlaceOrder}
              >
                🛒 Place Order
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Order;