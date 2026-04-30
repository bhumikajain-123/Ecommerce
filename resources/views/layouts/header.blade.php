<nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
  <div class="container-fluid">

    <!-- LOGO -->
    <a class="navbar-brand text-warning fw-bold" href="{{ url('/') }}">
      ShopEasy
    </a>

    <!-- SEARCH -->
    <form class="d-flex mx-auto" style="width:400px;">
      <input class="form-control me-2" type="search" placeholder="Search products...">
      <button class="btn btn-warning">Search</button>
    </form>

    <!-- RIGHT SIDE -->
    <div class="d-flex align-items-center gap-3">

      <a href="#" class="text-light text-decoration-none">
        <i class="fa-solid fa-shop"></i> Become Seller
      </a>

      <a href="{{ url('cart-list/product') }}" class="btn btn-success btn-sm">
        <i class="fa-solid fa-cart-shopping"></i> Cart
      </a>

      <a href="{{ url('login') }}" class="btn btn-primary btn-sm">
        <i class="fa-solid fa-user"></i> Login
      </a>

    </div>

  </div>
</nav>

<!-- 🔥 CATEGORY NAVBAR -->
<div class="bg-white shadow-sm">
  <div class="container d-flex justify-content-between py-2 category-bar">

    <a href="{{ url('category/fashion') }}" class="text-dark text-decoration-none fw-semibold">Fashion</a>

    <a href="{{ url('category/electronics') }}" class="text-dark text-decoration-none fw-semibold">Electronics</a>

    <a href="{{ url('category/mobiles') }}" class="text-dark text-decoration-none fw-semibold">Mobiles</a>

    <a href="{{ url('category/furniture') }}" class="text-dark text-decoration-none fw-semibold">Furniture</a>

    <a href="{{ url('category/grocery') }}" class="text-dark text-decoration-none fw-semibold">Grocery</a>

    <a href="{{ url('category/appliances') }}" class="text-dark text-decoration-none fw-semibold">Appliances</a>

    <a href="{{ url('category/books') }}" class="text-dark text-decoration-none fw-semibold">Books</a>

  </div>
</div>