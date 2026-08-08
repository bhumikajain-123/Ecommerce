import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import orderService from "../service/orderService";

function MyOrders() {

  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {

    const loadOrders = async () => {

      try {

        const data = await orderService.getMyOrders();

        console.log(data);

        setOrders(data);

      } catch (error) {

        console.log(error);

      }

    };

    loadOrders();

  }, []);


  return (

    <div className="container mt-5">

      <h2 className="mb-4">
        📦 My Orders
      </h2>


      {orders.length === 0 ? (

        <div className="text-center mt-5">

          <h4>No Orders Found</h4>

          <p className="text-muted">
            You haven't placed any orders yet.
          </p>

          <button
            className="btn btn-primary"
            onClick={() => navigate("/product")}
          >
            Start Shopping
          </button>

        </div>

      ) : (

        <div className="row">

          {orders.map((item) => (

            <div
              className="col-md-6 mb-4"
              key={item._id}
            >

              <div className="card shadow-sm border-0">

                <div className="card-body">

                  <div className="d-flex justify-content-between">

                    <h5>
                      Order
                    </h5>

                    <span className="badge bg-success">
                      {item.status}
                    </span>

                  </div>


                  <hr />


                  <p>
                    <strong>Order ID:</strong>
                    <br />
                    {item._id}
                  </p>


                  <p>
                    <strong>Order Date:</strong>
                    <br />

                    {new Date(
                      item.createdAt
                    ).toLocaleDateString()}
                  </p>


                  <p>
                    <strong>Total Amount:</strong>

                    <span className="text-success fw-bold ms-2">
                      ₹{item.totalAmount}
                    </span>
                  </p>


                  <button
                    className="btn btn-primary w-100 mt-2"
                    onClick={() =>
                      navigate(`/order/${item._id}`)
                    }
                  >
                    View Details
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}

export default MyOrders;