import "./Product.css";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import cartItemService from "../../service/cartItemService";

function Product() {
const [products,setProduct] = useState([]);


useEffect(()=>{
fetch('http://localhost:5000/product')
.then((res)=>res.json())
.then((data)=>{
  setProduct(data);

});
},[]);
const handleAddToCart = async (product) => {
  const data = await cartItemService.addToCart(
    product._id,
    product.price
  );

  alert(data.message);
};

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Products</h2>

      <div className="row">
        {products.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product._id}>
            <div className="card product-card h-100 shadow-sm">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />

              <div className="card-body text-center">
                <h5>{product.name}</h5>
                <h6 className="text-success">{product.price}</h6>

                <button className="btn btn-warning me-2"  onClick={()=>handleAddToCart(product)}>
                  Add to Cart
                </button>

                <Link to={`/product/${product._id}`}>
  <button className="btn btn-outline-dark">
    Details
  </button>
</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;