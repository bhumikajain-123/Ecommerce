@extends('user.layouts.main')

@push('title')
User Details
@endpush

@section('content')

<style>
/* Step Positions */
.start-0 { left: 0%; }
.start-33 { left: 33%; }
.start-66 { left: 66%; }
.start-100 { left: 100%; }

/* Step Label Fix */
.step-label {
    position: absolute;
    top: 45px;
    transform: translateX(-50%);
    font-size: 13px;
    width: 120px;
    text-align: center;
}
</style>

<div class="container-fluid px-4">

    <!-- 🔷 TOP SECTION -->
    <div class="row my-5">
        <h6 class="text-center">Order Details: Dec 25, 2024 (2 products)</h6>

        <!-- Billing -->
        <div class="col-md-6 mt-4">
            <div class="p-3 border border-primary rounded h-100">
                <h5>Billing Address</h5>
                <p><strong>Email:</strong> bhumika@gmail.com</p>
                <p><strong>Phone:</strong> +91 8923194017</p>
            </div>
        </div>

        <!-- Summary -->
        <div class="col-md-6 mt-4">
            <div class="p-3 border border-primary rounded h-100">
                <h5>Order Summary</h5>
                <p><strong>Order ID:</strong> 001</p>
                <p><strong>Payment:</strong> Cash On Delivery</p>
                <p><strong>Total:</strong> ₹1797</p>
            </div>
        </div>
    </div>

    <!-- 🔻 ORDER TRACKING -->
    <div class="row justify-content-center">
        <div class="col-md-8">

            <div class="position-relative my-5">

                <!-- Line -->
                <div class="progress" style="height:4px;">
                    <div class="progress-bar bg-primary" style="width:66%"></div>
                </div>

                <!-- Steps -->
                <div class="position-relative  ">

                    <button class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill">1</button>
                    <div class="step-label start-0">Order Received</div>

                    <button class="position-absolute top-0 start-33 translate-middle btn btn-sm btn-primary rounded-pill">2</button>
                    <div class="step-label start-33">Processing</div>

                    <button class="position-absolute top-0 start-66 translate-middle btn btn-sm btn-primary rounded-pill">3</button>
                    <div class="step-label start-66">On the Way</div>

                    <button class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill">4</button>
                    <div class="step-label start-100">Delivered</div>

                </div>

            </div>

        </div>
    </div>

    <!-- 🧾 PRODUCT TABLE -->
    <div class="row justify-content-center mt-4 ">
        <div class="col-md-8">

            <table class="table table-bordered table-hover text-center align-middle shadow">
                <thead class="table-dark">
                    <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td><img src="https://via.placeholder.com/60"></td>
                        <td>Camera</td>
                        <td>₹599</td>
                        <td>1</td>
                        <td>₹599</td>
                    </tr>

                    <tr>
                        <td><img src="https://via.placeholder.com/60"></td>
                        <td>Handbag</td>
                        <td>₹599</td>
                        <td>2</td>
                        <td>₹1198</td>
                    </tr>
                </tbody>

                <tfoot>
                    <tr>
                        <th colspan="4">Total</th>
                        <th>₹1797</th>
                    </tr>
                </tfoot>
            </table>

        </div>
    </div>

</div>

@endsection