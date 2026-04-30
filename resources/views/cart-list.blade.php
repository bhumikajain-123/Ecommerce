@extends('layouts.main')

@section('title', 'Cart List')

@section('content')

<!-- 🔥 HEADER -->
<div class="container-fluid bg-light p-4 text-center mb-4 shadow-sm">
    <h2 class="fw-bold">
        <i class="fa-solid fa-cart-shopping"></i> Cart List
    </h2>
</div>

<div class="container">
  <div class="row">

    <!-- 🧾 CART TABLE -->
    <div class="col-md-8">

      <div class="table-responsive">
        <table class="table align-middle text-center">

          <thead class="table-light">
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody>

            <!-- Item -->
            <tr>
              <td class="d-flex align-items-center gap-3">
                <img src="{{ asset('images/p1.jpg') }}" width="60">
                <span>Camera</span>
              </td>

              <td>₹599.00</td>

              <td>
                <div class="input-group justify-content-center" style="width:120px;">
                  <button class="btn btn-outline-secondary btn-sm">-</button>
                  <input type="text" class="form-control text-center" value="1" readonly>
                  <button class="btn btn-outline-secondary btn-sm">+</button>
                </div>
              </td>

              <td>₹599.00</td>

              <td>
                <button class="remove-btn">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>

            <!-- Item -->
            <tr>
              <td class="d-flex align-items-center gap-3">
                <img src="{{ asset('images/p2.jpg') }}" width="60">
                <span>Handbag</span>
              </td>

              <td>₹599.00</td>

              <td>
                <div class="input-group justify-content-center" style="width:120px;">
                  <button class="btn btn-outline-secondary btn-sm">-</button>
                  <input type="text" class="form-control text-center" value="2" readonly>
                  <button class="btn btn-outline-secondary btn-sm">+</button>
                </div>
              </td>

              <td>₹1198.00</td>

              <td>
                <button class="remove-btn">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>

    <!-- 💰 PRICE SUMMARY -->
    <div class="col-md-4">

      <div class="card shadow-sm p-3">
        <h5 class="mb-3">Price Details</h5>

        <div class="d-flex justify-content-between">
          <span>Price (2 items)</span>
          <span>₹1,198</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>Discount</span>
          <span class="text-success">-₹100</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>Delivery</span>
          <span class="text-success">Free</span>
        </div>

        <hr>

        <div class="d-flex justify-content-between fw-bold">
          <span>Total</span>
          <span>₹1,098</span>
        </div>

        <a href="{{ url('checkout/product') }}" class="btn btn-success w-100 mt-3">
    Place Order
</a>
      </div>

    </div>

  </div>
</div>

@endsection