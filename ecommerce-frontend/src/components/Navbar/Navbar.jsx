import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const token = localStorage.getItem("token");
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid px-4">

        {/* Logo */}
        <a className="navbar-brand fw-bold fs-3 text-warning" href="#">
          ShopMart
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">

          {/* Menu */}
          <ul className="navbar-nav ms-4">
            <li className="nav-item">
              <Link className="nav-link active" to ="/">Home</Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Shop</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Categories</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Deals</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>

          {/* Search */}
          <form className="d-flex mx-auto" style={{ width: "450px" }}>
            <input
              className="form-control"
              type="search"
              placeholder="Search products..."
            />
            <button className="btn btn-warning ms-2">
              Search
            </button>
          </form>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">
            <a href="#" className="nav-link text-white">
              ❤️ Wishlist
            </a>

           <Link to="/cart" className="nav-link text-white">
  🛒 Cart
</Link>
   {token ?  (<Link to = "/logout" className="btn btn-danger">Logout</Link>)
              
            : 
            (
    <Link  to = "/login" className="btn btn-warning">Login</Link>
  ) }
           
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;