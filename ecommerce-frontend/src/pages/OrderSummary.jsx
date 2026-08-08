import { useEffect,useState } from "react";
import cartItemService from "../service/cartItemService";
function OrderSummary(){
    const [summary,setSummary] = useState();

   useEffect(() => {

  const getCart = async () => {

    const data = await cartItemService.getToCart();

    setSummary(data);

    console.log(data);

  };

  getCart();

}, []);
  console.log(summary);
return(


   <div className="card shadow-sm">
            <div className="card-body">

              <h4>🧾 Order Summary</h4>

              <hr />

              <div className="d-flex justify-content-between">
                <span>Items Total</span>
                <span>₹101,000</span>
              </div>

              <div className="d-flex justify-content-between mt-2">
                <span>Shipping</span>
                <span className="text-success">Free</span>
              </div>

              <div className="d-flex justify-content-between mt-2">
                <span>Tax</span>
                <span>₹500</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <h5>Grand Total</h5>
                <h5>₹101,500</h5>
              </div>

              <button className="btn btn-success w-100 mt-3">
                🛒 Place Order
              </button>

              {/* <Link
                to="/cart"
                className="btn btn-outline-primary w-100 mt-2"
              >
                Back to Cart
              </Link> */}

            </div>
          </div>
);
}


export default OrderSummary;