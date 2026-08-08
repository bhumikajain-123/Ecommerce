import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import categoryService from "../../service/categoryService";
import "./Product.css";
import { Link } from "react-router-dom";
import cartItemService from "../../service/cartItemService";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";

function Product() {
    const { id } = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const data = await categoryService.filtercategory(id);

            setProducts(data.products);
        };

        getProducts();
    }, [id]);

    const handleAddToCart = async (product) => {
        const data = await cartItemService.addToCart(
            product._id,
            product.price
        );

        alert(data.message);
    };

    return (
        <>
        <Navbar/>
        <div className="container">

            <h2></h2>
<br/>
<br/>
            {products.length === 0 ? (
                <div className="text-center mt-5">
                    <h4>No products found</h4>
                    <p>There are no products in this category.</p>
                </div>
            ) : (
                <div className="row">
                    {products.map((product) => (
                        <div
                            className="col-lg-3 col-md-4 col-sm-6 mb-4"
                            key={product._id}
                        >
                            <div className="card product-card h-100 shadow-sm">

                                <img
                                    src={product.image}
                                    className="card-img-top"
                                    alt={product.name}
                                />

                                <div className="card-body text-center">

                                    <h5>{product.name}</h5>

                                    <h6 className="text-success">
                                        ₹{product.price}
                                    </h6>

                                    <button
                                        className="btn btn-warning me-2"
                                        onClick={() =>
                                            handleAddToCart(product)
                                        }
                                    >
                                        Add to Cart
                                    </button>

                                    <Link
                                        to={`/product/${product._id}`}
                                        className="btn btn-dark"
                                    >
                                        View
                                    </Link>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            )}

        </div>
        <Footer/>
        </>
    );
}

export default Product;