function Breadcrumb() {
  return (
    <nav>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          Home
        </li>

        <li className="breadcrumb-item">
          Shop
        </li>

        <li className="breadcrumb-item active">
          Product
        </li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;