import { useEffect, useState } from "react";
import addressService from "../service/addressService";
import orderService from "../service/orderService";


function OrderCheckout(){
const [orderSummary, setOrderSummary] = useState(null);
const [address,setAddress] = useState([]);
const [selectedAddress, setSelectedAddress] = useState(null);
useEffect(()=>{
    const HandleAddress = async () =>{
        const data = await addressService.getAddress();
setAddress(data.address);
    }
    HandleAddress();
},[])


const handleOrderSummary = async () => {

  if (!selectedAddress) {
    alert("Please select an address");
    return;
  }

  const data = await orderService.addOrderSummary(
    selectedAddress._id
  );

  console.log(data);
  setOrderSummary(data);
};
console.log(orderSummary);

     return (
  <>
    <div className="container mt-4">

  <h3>Select Delivery Address</h3>

  <div className="row">

    {address.map((item) => (

      <div className="col-md-6 mb-3" key={item._id}>

        <div
          className={`card p-3 ${
            selectedAddress?._id === item._id
              ? "border-primary"
              : ""
          }`}
          onClick={() => setSelectedAddress(item)}
          style={{ cursor: "pointer" }}
        >

          <div className="d-flex">

            <input
              type="radio"
              name="address"
              checked={selectedAddress?._id === item._id}
              onChange={() => setSelectedAddress(item)}
            />

            <div className="ms-3">

              <h5>{item.fullName}</h5>

              <p className="mb-1">
                📞 {item.phone}
              </p>

              <p className="mb-1">
                {item.addressLine}
              </p>

              <p className="mb-1">
                {item.city}, {item.state}
              </p>

              <p className="mb-1">
                {item.pincode}
              </p>

              <p className="mb-0">
                {item.country}
              </p>

            </div>

          </div>

        </div>

      </div>

    ))}

  </div>

 <button
  disabled={!selectedAddress}
   onClick={handleOrderSummary}
>
  Continue to Order Summary
</button>

</div>
  </>
);
}

export default OrderCheckout;   