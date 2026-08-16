import { useParams, useNavigate } from "react-router-dom";
import orderService from "../service/orderService";
import { useEffect, useState } from "react";

function Ordersuccess() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState([]);
  // const [address,setAddress] = useState();
  useEffect(() => {

    const getOrderItem = async () => {

      const data = await orderService.getOrder(id);

      console.log(data);

      setOrder(data);
    };

    getOrderItem();

  }, [id]);


  const totalAmount = order.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  return (
    <div className="container mt-5">

      {/* Success Message */}

      <div className="text-center mb-4">

        <div
          className="rounded-circle bg-success text-white d-inline-flex justify-content-center align-items-center"
          style={{
            width: "80px",
            height: "80px",
            fontSize: "40px"
          }}
        >
          ✓
        </div>

        <h1 className="text-success mt-3">
          Order Placed Successfully!
        </h1>

        <p className="text-muted">
          Thank you for shopping with us.
        </p>

      </div>


      {/* Order Information */}

      <div className="card shadow-sm border-0 mb-4">

        <div className="card-body">

          <h4 className="mb-3">
            Order Details
          </h4>

          <p>
            <strong>Order ID:</strong> {id}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            <span className="badge bg-success">
              Order Placed
            </span>
          </p>

        </div>

      </div>


      {/* Products */}

      <div className="card shadow-sm border-0">

        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">
            Ordered Products
          </h5>
        </div>

        <div className="card-body">

          {order.length === 0 ? (

            <p className="text-center text-muted">
              Loading order items...
            </p>

          ) : (

            order.map((item) => (

              <div
                className="row align-items-center border-bottom py-3"
                key={item._id}
              >

                {/* Product Image */}

                <div className="col-md-2">

                  <img
                    src={item.productId.image}
                    alt={item.productId.name}
                    className="img-fluid rounded"
                    style={{
                      height: "100px",
                      width: "100px",
                      objectFit: "cover"
                    }}
                  />

                </div>


                {/* Product Details */}

                <div className="col-md-5">

                  <h5>
                    {item.productId.name}
                  </h5>

                  <p className="text-muted mb-1">
                    Price: ₹{item.price}
                  </p>

                  <p className="mb-0">
                    Quantity: {item.quantity}
                  </p>

                </div>


                {/* Subtotal */}

                <div className="col-md-5 text-md-end">

                  <h5 className="text-success">
                    ₹{item.price * item.quantity}
                  </h5>

                </div>

              </div>

            ))

          )}


          {/* Total */}

          <div className="d-flex justify-content-between mt-4">

            <h4>
              Total Amount
            </h4>

            <h4 className="text-success">
              ₹{totalAmount}
            </h4>

          </div>

        </div>

      </div>


      {/* Buttons */}

      <div className="text-center mt-4 mb-5">

        <button
          className="btn btn-primary me-2"
          onClick={() => navigate("/my-orders")}
        >
          View My Orders
        </button>

        <button
          className="btn btn-outline-primary"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>

      </div>

    </div>
  );
}

export default Ordersuccess;