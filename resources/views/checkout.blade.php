@extends('layouts.main')

@section('title', 'Checkout')

@section('content')

<div class="container mt-4">
  <div class="row">

    <!-- 🧾 BILLING DETAILS -->
    <div class="col-md-7">

      <div class="card shadow-sm p-4">
        <h4 class="mb-3">Billing Details</h4>

        <form>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label>First Name</label>
              <input type="text" class="form-control" placeholder="First name">
            </div>

            <div class="col-md-6 mb-3">
              <label>Last Name</label>
              <input type="text" class="form-control" placeholder="Last name">
            </div>
          </div>

          <div class="mb-3">
            <label>Email</label>
            <input type="email" class="form-control" placeholder="Enter email">
          </div>

          <div class="mb-3">
            <label>Phone</label>
            <input type="text" class="form-control" placeholder="Enter phone">
          </div>

          <div class="mb-3">
            <label>Address</label>
            <textarea class="form-control" rows="3" placeholder="Full address"></textarea>
          </div>

          <div class="row">
            <div class="col-md-6 mb-3">
              <label>City</label>
              <input type="text" class="form-control">
            </div>

            <div class="col-md-6 mb-3">
              <label>Pincode</label>
              <input type="text" class="form-control">
            </div>
          </div>

        </form>

      </div>

    </div>

    <!-- 💰 ORDER SUMMARY -->
    <div class="col-md-5">

      <div class="card shadow-sm p-4">
        <h4 class="mb-3">Order Summary</h4>

        <!-- Product -->
        <div class="d-flex justify-content-between mb-2">
          <span>Camera × 1</span>
          <span>₹599</span>
        </div>

        <div class="d-flex justify-content-between mb-2">
          <span>Handbag × 2</span>
          <span>₹1198</span>
        </div>

        <hr>

        <div class="d-flex justify-content-between">
          <span>Subtotal</span>
          <span>₹1797</span>
        </div>

        <div class="d-flex justify-content-between">
          <span>Delivery</span>
          <span class="text-success">Free</span>
        </div>

        <hr>

        <div class="d-flex justify-content-between fw-bold">
          <span>Total</span>
          <span>₹1797</span>
        </div>

        <!-- Payment -->
        <div class="mt-3">
          <h6>Payment Method</h6>

          <div class="form-check">
            <input class="form-check-input" type="radio" name="payment" checked>
            <label class="form-check-label">Cash on Delivery</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="radio" name="payment">
            <label class="form-check-label">Online Payment</label>
          </div>
        </div>

        <!-- Place Order -->
        <button class="btn btn-success w-100 mt-4">
          Place Order
        </button>

      </div>

    </div>

  </div>
</div>

@endsection