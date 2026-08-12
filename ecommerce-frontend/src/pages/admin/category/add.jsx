
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryService from "../../../service/categoryService";

function Category() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        description: ""
    });


    // Handle input
    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    // Submit form
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const result = await CategoryService.addCategory(formData);

            console.log(result);

            alert("Category added successfully");

            // Go to category list
            navigate("/admin/categories");
console.log(formData);
        } catch (err) {

            console.log(err);

        }

    };


    return (

        <div className="container-fluid p-4">

            {/* Header */}

            <div className="mb-4">

                <h2 className="fw-bold mb-1">
                    Add Category
                </h2>

                <p className="text-muted">
                    Create a new product category
                </p>

            </div>


            {/* Form Card */}

            <div className="row">

                <div className="col-lg-7 col-md-9">

                    <div className="card border-0 shadow-sm">

                        <div className="card-body p-4">

                            <form onSubmit={handleSubmit}>

                                {/* Category Name */}

                                <div className="mb-4">

                                    <label className="form-label fw-semibold">
                                        Category Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control form-control-lg"
                                        placeholder="Enter category name"
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
                                        rows="5"
                                        placeholder="Enter category description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>


                                {/* Buttons */}

                                <div className="d-flex gap-2">

                                    <button
                                        type="submit"
                                        className="btn btn-primary px-4"
                                    >
                                        Add Category
                                    </button>


                                    <button
                                        type="button"
                                        className="btn btn-light border px-4"
                                        onClick={() =>
                                            navigate("/admin/categories")
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

export default Category;
