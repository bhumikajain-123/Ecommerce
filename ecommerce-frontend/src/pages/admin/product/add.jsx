import { useEffect, useState } from "react";
import categoryService from "../../../service/categoryService";
import productService from "../../../service/productService";
import { useNavigate } from "react-router-dom";
import "./add.css";

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

        <div className="product-page">

            <div className="product-card">

                <div className="product-header">

                    <h1>Add Product</h1>

                    <p>
                        Add a new product to your store
                    </p>

                </div>


                <form
                    className="product-form"
                    onSubmit={handleSubmit}
                >

                    {/* Product Name */}

                    <div className="form-group">

                        <label>Product Name</label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter product name"
                            value={productdata.name}
                            onChange={handleChange}
                        />

                        {errors.name && (
                            <p className="error">
                                {errors.name}
                            </p>
                        )}

                    </div>


                    {/* Category */}

                    <div className="form-group">

                        <label>Category</label>

                        <select
                            name="category"
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
                            <p className="error">
                                {errors.category}
                            </p>
                        )}

                    </div>


                    {/* Description */}

                    <div className="form-group">

                        <label>Description</label>

                        <textarea
                            name="description"
                            placeholder="Enter product description"
                            value={productdata.description}
                            onChange={handleChange}
                            rows="4"
                        />

                        {errors.description && (
                            <p className="error">
                                {errors.description}
                            </p>
                        )}

                    </div>


                    {/* Price + Stock */}

                    <div className="form-row">

                        <div className="form-group">

                            <label>Price</label>

                            <input
                                type="number"
                                name="price"
                                placeholder="Enter price"
                                value={productdata.price}
                                onChange={handleChange}
                            />

                            {errors.price && (
                                <p className="error">
                                    {errors.price}
                                </p>
                            )}

                        </div>


                        <div className="form-group">

                            <label>Stock</label>

                            <input
                                type="number"
                                name="stock"
                                placeholder="Enter stock"
                                value={productdata.stock}
                                onChange={handleChange}
                            />

                            {errors.stock && (
                                <p className="error">
                                    {errors.stock}
                                </p>
                            )}

                        </div>

                    </div>


                    {/* Image */}

                    <div className="form-group">

                        <label>Image URL</label>

                        <input
                            type="text"
                            name="image"
                            placeholder="Enter image URL"
                            value={productdata.image}
                            onChange={handleChange}
                        />

                        {errors.image && (
                            <p className="error">
                                {errors.image}
                            </p>
                        )}

                    </div>


                    {/* Buttons */}

                    <div className="button-group">
                        <button
    type="button"
    className="back-btn"
    onClick={() => navigate("/admin/products")}
>
    ← Back
</button>

                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={() => navigate("/admin/products")}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="add-btn"
                        >
                            Add Product
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default Add;