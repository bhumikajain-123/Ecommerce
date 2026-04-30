@extends('user.layouts.main')

@push('title')
User Details
@endpush

@section('content')

<!-- 🔧 Custom CSS -->
<style>
.start-33 { left: 33%; }
.start-66 { left: 66%; }

.step-label {
    position: absolute;
    top: 40px;
    transform: translateX(-50%);
    font-size: 12px;
    white-space: nowrap;
}
</style>

<div class="container-fluid px-4">

    <!-- 🔷 TOP SECTION -->
    <div class="row my-5">
        <h6>Order Details: Dec 25, 2024 (3 products)</h6>

        <!-- 🔵 Billing Address -->
        <div class="col-xl-6 col-md-6 mt-4">
            <div class="p-3 border border-primary rounded">

                <h5>Billing Address</h5>
                <h6>Reference site about giving information</h6>

                <p><strong>Email:</strong> bhumika@gmail.com</p>
                <p><strong>Phone:</strong> +91 8923194017</p>

            </div>
        </div>

        <!-- 🟢 Order Summary -->
        <div class="col-xl-6 col-md-6 mt-4">
            <div class="p-3 border border-primary rounded">

                <h5>Order Summary</h5>

                <p><strong>Id:</strong> 001</p>
                <p><strong>Payment Method:</strong> Cash On Delivery</p>
                <p><strong>Subtotal:</strong> Rs. 1499.00</p>
                <p><strong>Discount:</strong> 20%</p>
                <p><strong>Shipping Fee:</strong> Free</p>

                <h5 class="mt-3">Total: Rs. 1499.00</h5>

            </div>
        </div>
    </div>

    <!-- 🔻 ORDER TRACKING -->
    <div class="row">
        <div class="col-12">

            <div class="position-relative m-5">

                <!-- Progress Line -->
                <div class="progress" style="height: 3px;">
                    <div class="progress-bar bg-primary" style="width: 66%"></div>
                </div>

                <!-- Step 1 -->
                <button class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill"
                    style="width:2.5rem; height:2.5rem;">1</button>
                <div class="step-label start-0">Order Received</div>

                <!-- Step 2 -->
                <button class="position-absolute top-0 start-33 translate-middle btn btn-sm btn-primary rounded-pill"
                    style="width:2.5rem; height:2.5rem;">2</button>
                <div class="step-label start-33">Processing</div>

                <!-- Step 3 -->
                <button class="position-absolute top-0 start-66 translate-middle btn btn-sm btn-primary rounded-pill"
                    style="width:2.5rem; height:2.5rem;">3</button>
                <div class="step-label start-66">On the Way</div>

                <!-- Step 4 -->
                <button class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill"
                    style="width:2.5rem; height:2.5rem;">4</button>
                <div class="step-label start-100">Delivered</div>

            </div>

        </div>
    </div>

</div>

@endsection