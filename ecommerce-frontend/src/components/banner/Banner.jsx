function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6">
            <h1>Big Sale 50% Off</h1>

            <p>
              Shop the latest products with exciting discounts.
              Fast delivery and secure payment.
            </p>

            <button className="btn btn-warning me-3">
              Shop Now
            </button>

            <button className="btn btn-outline-light">
              Explore
            </button>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="https://via.placeholder.com/500x350"
              alt="Banner"
              className="img-fluid"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Banner;