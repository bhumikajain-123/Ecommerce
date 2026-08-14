import { useEffect, useState } from "react";
import categoryService from "../../../service/categoryService";
import productService from "../../../service/productService";
import { useNavigate } from "react-router-dom";

function Add() {
    const navigate = useNavigate();

    const [categoryData, setCategoryData] = useState([]);

    const [productdata, setProductData] = useState({
        category: "",
        name: "",
        description: "",
        price: "",
        stock: "",
        image: ""
    });

    const [errors, setErrors] = useState({});

    // Get categories
    useEffect(() => {
        const category = async () => {
            try {
                const data = await categoryService.getCategory();
                setCategoryData(data);
            } catch (err) {
                console.log(err);
            }
        };

        category();
    }, []);

    // Handle input
    const handleChange = (e) => {
        setProductData({
            ...productdata,
            [e.target.name]: e.target.value
        });

        setErrors({
            ...errors,
            [e.target.name]: ""
        });
    };

    // Validation
    const validateForm = () => {
        const newErrors = {};

        if (!productdata.name.trim()) {
            newErrors.name = "Product name is required";
        }

        if (!productdata.category) {
            newErrors.category = "Please select a category";
        }

        if (!productdata.description.trim()) {
            newErrors.description = "Description is required";
        }

        if (!productdata.price) {
            newErrors.price = "Price is required";
        } else if (Number(productdata.price) <= 0) {
            newErrors.price = "Price must be greater than 0";
        }

        if (productdata.stock === "") {
            newErrors.stock = "Stock is required";
        } else if (Number(productdata.stock) < 0) {
            newErrors.stock = "Stock cannot be negative";
        }

        if (!productdata.image.trim()) {
            newErrors.image = "Image is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validateForm();

        if (!isValid) {
            return;
        }

        try {
            console.log("Product data:", productdata);

            const data = await productService.addProduct(productdata);

            alert(data.message);

            navigate("/admin/products");
        } catch (err) {
            console.log(err);
            alert("Failed to add product");
        }
    };

    return (
        <div className="container py-5">

            <div className="card shadow-sm mx-auto" style={{ maxWidth: "750px" }}>

                {/* Header */}
                <div className="card-header bg-white py-4">
                    <h2 className="mb-1">Add Product</h2>

                    <p className="text-muted mb-0">
                        Add a new product to your store
                    </p>
                </div>

                {/* Form */}
                <div className="card-body p-4">

                    <form onSubmit={handleSubmit}>

                        {/* Product Name */}
                        <div className="mb-3">
                            <label className="form-label fw-semibold">
                                Product Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                className={`form-control ${
                                    errors.name ? "is-invalid" : ""
                                }`}
                                placeholder="Enter product name"
                                value={productdata.name}
                                onChange={handleChange}
                            />

                            {errors.name && (
                                <div className="invalid-feedback">
                                    {errors.name}
                                </div>
                            )}
                        </div>

                        {/* Category */}
                        <div className="mb-3">
                            <label className="form-label fw-semibold">
                                Category
                            </label>

                            <select
                                name="category"
                                className={`form-select ${
                                    errors.category ? "is-invalid" : ""
                                }`}
                                value={productdata.category}
                                onChange={handleChange}
                            >
                                <option value="">
                                    Select Category
                                </option>

                                {categoryData.map((item) => (
                                    <option
                                        key={item._id}
                                        value={item._id}
                                    >
                                        {item.name}
                                    </option>
                                ))}
                            </select>

                            {errors.category && (
                                <div className="invalid-feedback">
                                    {errors.category}
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        <div className="mb-3">
                            <label className="form-label fw-semibold">
                                Description
                            </label>

                            <textarea
                                name="description"
                                className={`form-control ${
                                    errors.description ? "is-invalid" : ""
                                }`}
                                placeholder="Enter product description"
                                value={productdata.description}
                                onChange={handleChange}
                                rows="4"
                            />

                            {errors.description && (
                                <div className="invalid-feedback">
                                    {errors.description}
                                </div>
                            )}
                        </div>

                        {/* Price + Stock */}
                        <div className="row">

                            <div className="col-md-6 mb-3">
                                <label className="form-label fw-semibold">
                                    Price
                                </label>

                                <input
                                    type="number"
                                    name="price"
                                    className={`form-control ${
                                        errors.price ? "is-invalid" : ""
                                    }`}
                                    placeholder="Enter price"
                                    value={productdata.price}
                                    onChange={handleChange}
                                />

                                {errors.price && (
                                    <div className="invalid-feedback">
                                        {errors.price}
                                    </div>
                                )}
                            </div>

                            <div className="col-md-6 mb-3">
                                <label className="form-label fw-semibold">
                                    Stock
                                </label>

                                <input
                                    type="number"
                                    name="stock"
                                    className={`form-control ${
                                        errors.stock ? "is-invalid" : ""
                                    }`}
                                    placeholder="Enter stock"
                                    value={productdata.stock}
                                    onChange={handleChange}
                                />

                                {errors.stock && (
                                    <div className="invalid-feedback">
                                        {errors.stock}
                                    </div>
                                )}
                            </div>

                        </div>

                        {/* Image */}
                        <div className="mb-4">
                            <label className="form-label fw-semibold">
                                Image URL
                            </label>

                            <input
                                type="text"
                                name="image"
                                className={`form-control ${
                                    errors.image ? "is-invalid" : ""
                                }`}
                                placeholder="Enter image URL"
                                value={productdata.image}
                                onChange={handleChange}
                            />

                            {errors.image && (
                                <div className="invalid-feedback">
                                    {errors.image}
                                </div>
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="d-flex justify-content-end gap-2 border-top pt-3">

                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={() =>
                                    navigate("/admin/products")
                                }
                            >
                                ← Back
                            </button>

                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() =>
                                    navigate("/admin/products")
                                }
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Add Product
                            </button>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default Add;