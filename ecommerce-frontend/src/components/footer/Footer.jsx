function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-3 mb-4">
            <h3 className="text-warning fw-bold">ShopMart</h3>
            <p className="text-white-50">
              ShopMart is your one-stop destination for fashion,
              electronics, groceries, and more at the best prices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-white-50">Home</a></li>
              <li><a href="#" className="text-decoration-none text-white-50">Shop</a></li>
              <li><a href="#" className="text-decoration-none text-white-50">Categories</a></li>
              <li><a href="#" className="text-decoration-none text-white-50">Contact</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Customer Support</h5>
            <ul className="list-unstyled">
              <li>Email: support@shopmart.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Mon - Sat: 9 AM - 8 PM</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Follow Us</h5>

            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-light fs-4">📘</a>
              <a href="#" className="text-light fs-4">📸</a>
              <a href="#" className="text-light fs-4">🐦</a>
              <a href="#" className="text-light fs-4">▶️</a>
            </div>

            <div className="mt-4">
              <button className="btn btn-warning">
                Download App
              </button>
            </div>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center text-white-50">
          © 2026 ShopMart. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;