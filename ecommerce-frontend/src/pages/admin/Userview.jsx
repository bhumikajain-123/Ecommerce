
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserService from "../../service/userService";

function Userview() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    useEffect(() => {

        const handleView = async () => {

            try {

                const data = await UserService.getUserById(id);

                console.log(data);

                setUser(data.user);

            } catch (err) {

                console.log(err);

            }

        };

        handleView();

    }, [id]);


    if (!user) {
        return (
            <div className="container-fluid p-4">
                <h4>Loading...</h4>
            </div>
        );
    }


    return (

        <div className="container-fluid p-4">

            {/* Header */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                    <h2 className="fw-bold mb-1">
                        User Details
                    </h2>

                    <p className="text-muted mb-0">
                        View user information
                    </p>
                </div>

                <button
                    className="btn btn-secondary"
                    onClick={() => navigate("/admin/users")}
                >
                    ← Back
                </button>

            </div>


            {/* User Information */}

            <div className="card border-0 shadow-sm">

                <div className="card-body p-4">

                    <h4 className="fw-bold mb-4">
                        {user.name}
                    </h4>

                    <div className="row">

                        {/* Name */}

                        <div className="col-md-6 mb-4">

                            <label className="text-muted">
                                Name
                            </label>

                            <p className="fw-semibold mb-0">
                                {user.name}
                            </p>

                        </div>


                        {/* Email */}

                        <div className="col-md-6 mb-4">

                            <label className="text-muted">
                                Email
                            </label>

                            <p className="fw-semibold mb-0">
                                {user.email}
                            </p>

                        </div>


                        {/* Role */}

                        <div className="col-md-6 mb-4">

                            <label className="text-muted">
                                Role
                            </label>

                            <p className="mb-0">

                                <span className="badge bg-primary">
                                    {user.role}
                                </span>

                            </p>

                        </div>


                        {/* Created Date */}

                        <div className="col-md-6 mb-4">

                            <label className="text-muted">
                                Registered On
                            </label>

                            <p className="fw-semibold mb-0">

                                {new Date(
                                    user.createdAt
                                ).toLocaleDateString()}

                            </p>

                        </div>


                        {/* Updated Date */}

                        <div className="col-md-6 mb-4">

                            <label className="text-muted">
                                Last Updated
                            </label>

                            <p className="fw-semibold mb-0">

                                {new Date(
                                    user.updatedAt
                                ).toLocaleDateString()}

                            </p>

                        </div>


                        {/* User ID */}

                        <div className="col-md-6 mb-4">

                            <label className="text-muted">
                                User ID
                            </label>

                            <p className="text-muted small mb-0">
                                {user._id}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Userview;
