
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import UserService from "../../service/userService";

function Edit() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: ""
    });


    // Get user by ID
    useEffect(() => {

        const handleView = async () => {

            try {

                const data = await UserService.getUserById(id);

                console.log(data);

                setUser(data.user);

                setFormData({
                    name: data.user.name || "",
                    email: data.user.email || "",
                    role: data.user.role || ""
                });

            } catch (err) {

                console.log(err);

            }

        };

        handleView();

    }, [id]);


    // Handle input change
    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    // Submit updated data
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const data = await UserService.editUser(id, formData);

            console.log(data);

            alert("User updated successfully");

            navigate("/admin/users");

        } catch (err) {

            console.log(err);

        }

    };


    // Loading
    if (!user) {

        return (
            <div className="container-fluid p-4">

                <div className="d-flex justify-content-center align-items-center"
                     style={{ minHeight: "300px" }}>

                    <div className="spinner-border text-primary">
                    </div>

                </div>

            </div>
        );

    }


    return (

        <div className="container-fluid p-4">

            {/* Page Header */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>

                    <h2 className="fw-bold mb-1">
                        Edit User
                    </h2>

                    <p className="text-muted mb-0">
                        Update user information
                    </p>

                </div>


                <button
                    className="btn btn-outline-secondary"
                    onClick={() => navigate("/admin/users")}
                >
                    ← Back to Users
                </button>

            </div>


            {/* Edit Card */}

            <div className="row">

                <div className="col-lg-7 col-md-9">

                    <div className="card border-0 shadow-sm">

                        {/* Card Header */}

                        <div className="card-header bg-white border-0 py-3">

                            <h5 className="fw-bold mb-0">
                                User Information
                            </h5>

                        </div>


                        {/* Form */}

                        <div className="card-body p-4">

                            <form onSubmit={handleSubmit}>


                                {/* Name */}

                                <div className="mb-4">

                                    <label className="form-label fw-semibold">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control form-control-lg"
                                        placeholder="Enter user name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>


                                {/* Email */}

                                <div className="mb-4">

                                    <label className="form-label fw-semibold">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control form-control-lg"
                                        placeholder="Enter email address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>


                                {/* Role */}

                                <div className="mb-4">

                                    <label className="form-label fw-semibold">
                                        Role
                                    </label>

                                    <select
                                        name="role"
                                        className="form-select form-select-lg"
                                        value={formData.role}
                                        onChange={handleChange}
                                        required
                                    >

                                        <option value="">
                                            Select Role
                                        </option>

                                        <option value="user">
                                            User
                                        </option>

                                        <option value="admin">
                                            Admin
                                        </option>

                                    </select>

                                </div>


                                {/* Buttons */}

                                <div className="d-flex gap-2 pt-2">

                                    <button
                                        type="submit"
                                        className="btn btn-primary px-4"
                                    >
                                        Update User
                                    </button>


                                    <button
                                        type="button"
                                        className="btn btn-light border px-4"
                                        onClick={() =>
                                            navigate("/admin/users")
                                        }
                                    >
                                        Cancel
                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>


                {/* User Preview */}

                <div className="col-lg-5 col-md-3 mt-4 mt-lg-0">

                    <div className="card border-0 shadow-sm">

                        <div className="card-body text-center p-4">

                            <div
                                className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    fontSize: "30px"
                                }}
                            >
                                {formData.name
                                    ? formData.name.charAt(0).toUpperCase()
                                    : "U"}
                            </div>


                            <h5 className="fw-bold mb-1">
                                {formData.name || "User Name"}
                            </h5>


                            <p className="text-muted mb-3">
                                {formData.email || "user@email.com"}
                            </p>


                            <span
                                className={`badge ${
                                    formData.role === "admin"
                                        ? "bg-danger"
                                        : "bg-primary"
                                } px-3 py-2`}
                            >
                                {formData.role || "No Role"}
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Edit;
