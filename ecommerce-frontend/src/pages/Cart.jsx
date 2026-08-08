import cartItemService from "../service/cartItemService";
import { useEffect, useState } from "react";

function Cart() {

  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {

    const loadCartItem = async () => {

      try {

        const data = await cartItemService.getToCart();

        setCartItem(data.items);

      } catch (error) {

        console.log(error);

      }

    };

    loadCartItem();

  }, []);


  const handleQuantity = async (id, action) => {

    await cartItemService.updateQuantity(id, action);

    const cartdata = await cartItemService.getToCart();

    setCartItem(cartdata.items);

  };


  const deleteItem = async (id) => {

    await cartItemService.removeItem(id);

    const cartdata = await cartItemService.getToCart();

    setCartItem(cartdata.items);

  };


  const itemsTotal = cartItem.reduce(
    (total, item) =>
      total + item.productId.price * item.quantity,
    0
  );

  const shipping = 0;
  const tax = 500;

  const grandTotal = itemsTotal + shipping + tax;


  return (

    <div className="container">

      <h3 className="mb-4">
        🛒 My Cart
      </h3>


      <div className="row g-4">


        {/* ================= LEFT : CART ================= */}

        <div className="col-lg-8">

          {cartItem.map((item) => (

            <div
              className="card shadow-sm border-0 rounded-4 mb-3"
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
                      maxHeight: "150px",
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


                    {/* Quantity */}

                    <div className="d-flex align-items-center mb-3">

                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() =>
                          handleQuantity(
                            item._id,
                            "decrease"
                          )
                        }
                      >
                        −
                      </button>

                      <span className="mx-3 fw-bold">
                        {item.quantity}
                      </span>

                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() =>
                          handleQuantity(
                            item._id,
                            "increase"
                          )
                        }
                      >
                        +
                      </button>

                    </div>


                    {/* Subtotal */}

                    <h6>
                      Subtotal: ₹
                      {item.productId.price * item.quantity}
                    </h6>


                    {/* Remove */}

                    <button
                      className="btn btn-outline-danger btn-sm mt-2"
                      onClick={() =>
                        deleteItem(item._id)
                      }
                    >
                      🗑️ Remove
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* ================= RIGHT : SUMMARY ================= */}

        <div className="col-lg-4">

          <div
            className="card shadow-sm border-0 rounded-4"
            style={{
              position: "sticky",
              top: "20px"
            }}
          >

            <div className="card-body p-4">

              <h4 className="fw-bold">
                🧾 Order Summary
              </h4>

              <hr />


              {/* Items Total */}

              <div className="d-flex justify-content-between mb-2">

                <span>
                  Items Total
                </span>

                <span className="fw-bold">
                  ₹{itemsTotal}
                </span>

              </div>


              {/* Shipping */}

              <div className="d-flex justify-content-between mb-2">

                <span>
                  Shipping
                </span>

                <span className="text-success">
                  Free
                </span>

              </div>


              {/* Tax */}

              <div className="d-flex justify-content-between mb-2">

                <span>
                  Tax
                </span>

                <span>
                  ₹{tax}
                </span>

              </div>


              <hr />


              {/* Grand Total */}

              <div className="d-flex justify-content-between">

                <h5 className="fw-bold">
                  Grand Total
                </h5>

                <h5 className="fw-bold text-success">
                  ₹{grandTotal}
                </h5>

              </div>


              <button className="btn btn-success w-100 mt-3">
                🛒 Place Order
              </button>


            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Cart;