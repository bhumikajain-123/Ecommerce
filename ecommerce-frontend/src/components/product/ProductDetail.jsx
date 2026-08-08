import "./ProductDetail.css";
import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
function ProductDetail() {
const { id } = useParams();
    const [product,setProduct] = useState({});
    useEffect(()=>{
          fetch(`http://localhost:5000/product/${id}`)
        .then((res)=>res.json())
        .then((data)=>setProduct(data));
    },[id]);
  

  return (
    <div className="container my-5">
      <div className="row">

        {/* Product Image */}
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Product Details */}
        <div className="col-md-6">

          <h2>{product.name}</h2>

          <h3 className="text-success">
            ₹{product.price}
          </h3>

          <p>
            {product.description}
          </p>

          <p>
            <strong>Availability:</strong>{" "}
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>

          <div className="my-3">
            <label className="me-2">Quantity:</label>
            <input
              type="number"
              min="1"
              defaultValue="1"
              style={{ width: "70px" }}
            />
          </div>

          <button className="btn btn-warning me-3">
            Add to Cart
          </button>

          <button className="btn btn-success">
            Buy Now
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductDetail;