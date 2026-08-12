
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("admintoken");
        navigate("/admin/login");
    };

    return (
        <div
            className="bg-dark text-white p-3"
            style={{
                width: "250px",
                minHeight: "100vh"
            }}
        >

            {/* Logo */}
            <h3 className="text-center mb-4">
                Admin Panel
            </h3>

            <hr />

            {/* Menu */}
            <ul className="nav flex-column">

                <li className="nav-item mb-2">
                    <Link
                        to="/admin/dashboard"
                        className="nav-link text-white"
                    >
                        🏠 Dashboard
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link
                        to="/admin/users"
                        className="nav-link text-white"
                    >
                        👤 Users
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link
                        to="/admin/categories"
                        className="nav-link text-white"
                    >
                        🏷️ Categories
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link
                        to="/admin/products"
                        className="nav-link text-white"
                    >
                        📦 Products
                    </Link>
                </li>

                <li className="nav-item mb-2">
                    <Link
                        to="/admin/orders"
                        className="nav-link text-white"
                    >
                        🛒 Orders
                    </Link>
                </li>

            </ul>

            {/* Logout */}
            <div className="mt-4">

                <button
                    onClick={handleLogout}
                    className="btn btn-danger w-100"
                >
                    Logout
                </button>

            </div>

        </div>
    );
}

export default Sidebar;
