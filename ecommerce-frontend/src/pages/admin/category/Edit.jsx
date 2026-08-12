import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import categoryService from "../../../service/categoryService";

function CategoryEdit() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        description: ""
    });

    const [loading, setLoading] = useState(true);


    // Get category by ID
    useEffect(() => {

        const getCategory = async () => {

            try {

                const result =
                    await categoryService.getCategoryById(id);

                console.log("Category:", result);

                // If backend returns category directly
                setFormData({
                    name: result.name || "",
                    description: result.description || ""
                });

                setLoading(false);

            } catch (err) {

                console.log(err);
                setLoading(false);

            }

        };

        getCategory();

    }, [id]);


    // Handle input change
    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    // Update category
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const result =
                await categoryService.updateCategory(
                    id,
                    formData
                );

            console.log("Updated:", result);

            alert("Category updated successfully");

            navigate("/admin/categories");

        } catch (err) {

            console.log(err);

        }

    };


    if (loading) {
        return (
            <div className="container-fluid p-4">
                <h4>Loading category...</h4>
            </div>
        );
    }


    return (

        <div className="container-fluid p-4">

            {/* Header */}

            <div className="mb-4">

                <h2 className="fw-bold mb-1">
                    Edit Category
                </h2>

                <p className="text-muted">
                    Update category information
                </p>

            </div>


            {/* Form */}

            <div className="row">

                <div className="col-lg-7 col-md-9">

                    <div className="card border-0 shadow-sm">

                        <div className="card-body p-4">

                            <form onSubmit={handleSubmit}>

                                {/* Name */}

                                <div className="mb-4">

                                    <label className="form-label fw-semibold">
                                        Category Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control form-control-lg"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter category name"
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
                                        placeholder="Enter category description"
                                        required
                                    />

                                </div>


                                {/* Buttons */}

                                <div className="d-flex gap-2">

                                    <button
                                        type="submit"
                                        className="btn btn-primary px-4"
                                    >
                                        Update Category
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

export default CategoryEdit;