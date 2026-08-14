import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import productService from "../../../service/productService";

function ProductEdit() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        image: ""
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getProduct = async () => {

            try {

                const result =
                    await productService.getProductById(id);

                setFormData({
                    name: result.name || "",
                    description: result.description || "",
                    price: result.price || "",
                    stock: result.stock || "",
                    image: result.image || ""
                });

                setLoading(false);

            } catch (err) {

                console.log(err);
                setLoading(false);

            }
        };

        getProduct();

    }, [id]);


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const result =
                await productService.updateProduct(
                    id,
                    formData
                );

            console.log(result);

            alert("Product updated successfully");

            navigate("/admin/products");

        } catch (err) {

            console.log(err);

        }

    };


    if (loading) {
        return <h4>Loading product...</h4>;
    }


    return (

        <div className="container-fluid p-4">

            <div className="mb-4">

                <h2 className="fw-bold">
                    Edit Product
                </h2>

                <p className="text-muted">
                    Update product information
                </p>

            </div>


            <div className="row">

                <div className="col-lg-8">

                    <div className="card border-0 shadow-sm">

                        <div className="card-body p-4">

                            <form onSubmit={handleSubmit}>

                                {/* Product Name */}

                                <div className="mb-4">

                                    <label className="form-label fw-semibold">
                                        Product Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>


                                {/* Description */}

                                <div className="mb-4">

                                    <label className="form-label fw-semibold">
                                        Description
                                    </label>

                                    <textarea
                                        name="description"
                                        className="form-control"
                                        rows="4"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>


                                {/* Price */}

                                <div className="mb-4">

                                    <label className="form-label fw-semibold">
                                        Price
                                    </label>

                                    <input
                                        type="number"
                                        name="price"
                                        className="form-control"
                                        value={formData.price}
                                        onChange={handleChange}
                                        min="0"
                                        required
                                    />

                                </div>


                                {/* Stock */}

                                <div className="mb-4">

                                    <label className="form-label fw-semibold">
                                        Stock
                                    </label>

                                    <input
                                        type="number"
                                        name="stock"
                                        className="form-control"
                                        value={formData.stock}
                                        onChange={handleChange}
                                        min="0"
                                        required
                                    />

                                </div>


                                {/* Image URL */}

                                <div className="mb-4">

                                    <label className="form-label fw-semibold">
                                        Product Image URL
                                    </label>

                                    <input
                                        type="text"
                                        name="image"
                                        className="form-control"
                                        value={formData.image}
                                        onChange={handleChange}
                                        placeholder="Enter image URL"
                                        required
                                    />

                                </div>


                                {/* Image Preview */}

                                {formData.image && (

                                    <div className="mb-4">

                                        <label className="form-label fw-semibold d-block">
                                            Image Preview
                                        </label>

                                        <img
                                            src={formData.image}
                                            alt={formData.name}
                                            style={{
                                                width: "150px",
                                                height: "150px",
                                                objectFit: "cover",
                                                borderRadius: "10px",
                                                border: "1px solid #ddd"
                                            }}
                                        />

                                    </div>

                                )}


                                {/* Buttons */}

                                <div className="d-flex gap-2">

                                    <button
                                        type="submit"
                                        className="btn btn-primary px-4"
                                    >
                                        Update Product
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-light border px-4"
                                        onClick={() =>
                                            navigate("/admin/products")
                                        }
                                    >
                                        Cancel
                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default ProductEdit;