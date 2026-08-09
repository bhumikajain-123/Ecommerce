
import { useState } from "react";
import adminloginService from "../../service/adminloginService";
import {useNavigate} from "react-router-dom"
function Login() {
const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await adminloginService.setLogin(data);

        console.log(result);

        if (result.token) {
            localStorage.setItem("adminToken", result.token);
        }
        navigate("/admin/dashboard");
    };

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">

            <div
                className="card shadow-lg border-0"
                style={{
                    width: "400px",
                    borderRadius: "18px"
                }}
            >

                <div className="card-body p-5">

                    {/* Heading */}
                    <div className="text-center mb-4">

                        <div
                            className="bg-dark text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                            style={{
                                width: "65px",
                                height: "65px",
                                fontSize: "28px"
                            }}
                        >
                            👤
                        </div>

                        <h2 className="fw-bold mb-1">
                            Admin Login
                        </h2>

                        <p className="text-muted mb-0">
                            Login to manage your store
                        </p>

                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit}>

                        {/* Email */}
                        <div className="mb-3">

                            <label className="form-label fw-semibold">
                                Email Address
                            </label>

                            <input
                                className="form-control form-control-lg"
                                placeholder="Enter your email"
                                type="email"
                                value={data.email}
                                name="email"
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {/* Password */}
                        <div className="mb-4">

                            <label className="form-label fw-semibold">
                                Password
                            </label>

                            <input
                                className="form-control form-control-lg"
                                placeholder="Enter your password"
                                type="password"
                                value={data.password}
                                name="password"
                                onChange={handleChange}
                                required
                            />

                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="btn btn-dark btn-lg w-100 fw-semibold"
                        >
                            Login
                        </button>

                    </form>

                    {/* Footer */}
                    <div className="text-center mt-4">

                        <small className="text-muted">
                            Admin access only
                        </small>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;