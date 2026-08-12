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
        stock: ""
    });

    const [loading, setLoading] = useState(true);


    // Get product by ID
    useEffect(() => {

        const getProduct = async () => {

            try {

                const result =
                    await productService.getProductById(id);

                console.log("Product:", result);

                setFormData({
                    name: result.name || "",
                    description: result.description || "",
                    price: result.price || "",
                    stock: result.stock || ""
                });

                setLoading(false);

            } catch (err) {

                console.log(err);

                setLoading(false);

            }

        };

        getProduct();

    }, [id]);


    // Handle input change
    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    // Update product
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const result =
                await productService.updateProduct(
                    id,
                    formData
                );

            console.log("Updated:", result);

            alert("Product updated successfully");

            navigate("/admin/products");

        } catch (err) {

            console.log(err);

        }

    };


    if (loading) {

        return (

            <div className="container-fluid p-4">

                <h4>Loading product...</h4>

            </div>

        );

    }


    return (

        <div className="container-fluid p-4">

            {/* Header */}

            <div className="mb-4">

                <h2 className="fw-bold mb-1">
                    Edit Product
                </h2>

                <p className="text-muted">
                    Update product information
                </p>

            </div>


            {/* Form */}

            <div className="row">

                <div className="col-lg-8 col-md-10">

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
                                        className="form-control form-control-lg"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter product name"
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
                                        rows="5"
                                        value={formData.description}
                                        onChange={handleChange}
                                        placeholder="Enter product description"
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
                                        placeholder="Enter product price"
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
                                        placeholder="Enter product stock"
                                        min="0"
                                        required
                                    />

                                </div>


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