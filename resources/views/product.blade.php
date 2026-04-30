@extends('layouts.main')

@section('title', 'Product Detail')

@section('content')

<div class="container mt-4 bg-white p-4 shadow-sm">

    <div class="row">

        <!-- 🔥 Product Image -->
        <div class="col-md-5 text-center">
            <img src="{{ asset('images/p1.jpg') }}" class="img-fluid rounded" style="max-height:300px;">
        </div>

        <!-- 🔥 Product Info -->
        <div class="col-md-7">

            <h3 class="fw-bold">{{$slug}}</h3>

            <h4 class="text-dark">₹499.00</h4>

            <!-- ⭐ Rating -->
            <div class="mb-2">
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-warning"></i>
                <i class="fa-solid fa-star text-secondary"></i>
                <span class="ms-2 text-muted">2 Customer Ratings</span>
            </div>

            <!-- quantity increase and decrease -->

            <!-- 🔢 Quantity Selector -->
            <div class="d-flex align-items-center mt-3 mb-3">

                <label class="me-3 fw-semibold">Quantity:</label>

                <div class="input-group" style="width:130px;">

                    <button class="btn btn-outline-secondary" type="button" id="decrease">-</button>

                    <input type="text" id="quantity" class="form-control text-center" value="1" readonly>

                    <button class="btn btn-outline-secondary" type="button" id="increase">+</button>

                </div>

            </div>

            <!-- Description short -->
            <p class="text-muted">
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution of letters.
            </p>

            <!-- Buttons -->
            <div class="mt-3">
                <button class="btn btn-success me-2">
                    <i class="fa-solid fa-cart-plus"></i> Add to Cart
                </button>

                <button class="btn btn-warning text-white">
                    Buy Now
                </button>
            </div>

        </div>

    </div>

</div>

<!-- 🔥 PRODUCT DESCRIPTION -->
<div class="container mt-4 bg-white p-4 shadow-sm">

    <h4 class="mb-3">Product Description</h4>

    <p>
        It is a long established fact that a reader will be distracted by the readable
        content of a page when looking at its layout. The point of using Lorem Ipsum is
        that it has a more-or-less normal distribution of letters, as opposed to using
        'Content here, content here', making it look like readable English.
    </p>

    <p>
        It is a long established fact that a reader will be distracted by the readable
        content of a page when looking at its layout. The point of using Lorem Ipsum is
        that it has a more-or-less normal distribution of letters.
    </p>

    <p>
        It is a long established fact that a reader will be distracted by the readable
        content of a page when looking at its layout.
    </p>

</div>

<!-- 🔥 CUSTOMER REVIEWS -->
<div class="container mt-4 bg-white p-4 shadow-sm">

    <h4 class="mb-3">Customer Reviews</h4>

    <!-- ⭐ Overall Rating -->
    <div class="mb-4">
        <h5>4.0 <i class="fa-solid fa-star text-warning"></i></h5>
        <p class="text-muted">Based on 2 reviews</p>
    </div>

    <!-- 🔥 Review 1 -->
    <div class="border-bottom pb-3 mb-3">
        <h6 class="mb-1">Riya Sharma</h6>
        <div>
            <i class="fa-solid fa-star text-warning"></i>
            <i class="fa-solid fa-star text-warning"></i>
            <i class="fa-solid fa-star text-warning"></i>
            <i class="fa-solid fa-star text-warning"></i>
            <i class="fa-solid fa-star text-secondary"></i>
        </div>
        <p class="mt-2 text-muted">
            Very good product. Quality is nice and comfortable.
        </p>
    </div>

    <!-- 🔥 Review 2 -->
    <div class="border-bottom pb-3 mb-3">
        <h6 class="mb-1">Aman Verma</h6>
        <div>
            <i class="fa-solid fa-star text-warning"></i>
            <i class="fa-solid fa-star text-warning"></i>
            <i class="fa-solid fa-star text-warning"></i>
            <i class="fa-solid fa-star text-secondary"></i>
            <i class="fa-solid fa-star text-secondary"></i>
        </div>
        <p class="mt-2 text-muted">
            Good but delivery was a bit late.
        </p>
    </div>

</div>


<!-- 🔥 ADD REVIEW FORM -->
<div class="container mt-4 bg-white p-4 shadow-sm">

    <h4 class="mb-3">Write a Review</h4>

    <form>

        <!-- Name -->


        <!-- Rating -->
        <!-- ⭐ Star Rating -->
        <div class="mb-3">


            <div class="star-rating">Rating
                <i class="fa-regular fa-star" data-value="1"></i>
                <i class="fa-regular fa-star" data-value="2"></i>
                <i class="fa-regular fa-star" data-value="3"></i>
                <i class="fa-regular fa-star" data-value="4"></i>
                <i class="fa-regular fa-star" data-value="5"></i>
            </div>

            <!-- Hidden input to store value -->
            <input type="hidden" name="rating" id="rating-value">
        </div>

        <div class="row mb-2">
            <div class="col-6">

                <input type="text" class="form-control" placeholder="Enter your name">
            </div>
            <div class="col-6">


                <input type="text" class="form-control" placeholder="Enter your Email">
            </div>
        </div>

        <!-- Review -->
        <div class="mb-3 mt-3">
            <textarea class="form-control" rows="3" placeholder="Write your review..."></textarea>
        </div>

        <!-- Submit -->
        <button class="btn btn-primary">Submit Review</button>

    </form>

</div>

@endsection