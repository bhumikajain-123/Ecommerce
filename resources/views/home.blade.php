@extends('layouts.main')

@section('title', 'Home')

@section('content')

<!-- 🔥 SLIDER -->
<div id="mainCarousel" class="carousel slide mb-4" data-bs-ride="carousel">
    <div class="carousel-inner">


       <div class="carousel-item active">
  <img src="{{ asset('images/product/slide1.jpg') }}" 
       class="d-block w-100" 
       style="height:400px; object-fit:cover;">
</div>


        <div class="carousel-item">
            <img src="{{ asset('images/product/slide2.jpg') }}" class="d-block w-100" style="height:400px; object-fit:cover;">
        </div>

        <div class="carousel-item">
            <img src="{{ asset('images/product/slide3.jpg') }}" class="d-block w-100" style="height:400px; object-fit:cover;">
        </div>

    </div>
</div>

<!-- 🔥 TOP DEALS -->
<div class="bg-white p-3 shadow-sm mb-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h4>🔥 Top Deals</h4>
        <a href="#" class="btn btn-warning btn-sm">View All</a>
    </div>

    <div class="row">

        <!-- Product 1 -->
        <div class="col-md-3 text-center">
            <img src="{{ asset('images/p1.jpg') }}" class="img-fluid" style="height:150px;">
            <p>Product 1</p>
        </div>

        <!-- Product 2 -->
        <div class="col-md-3 text-center">
            <img src="{{ asset('images/p2.jpg') }}" class="img-fluid" style="height:150px;">
            <p>Product 2</p>
        </div>

        <!-- Product 3 -->
        <div class="col-md-3 text-center">
            <img src="{{ asset('images/p3.jpg') }}" class="img-fluid" style="height:150px;">
            <p>Product 3</p>
        </div>

        <!-- Product 4 -->
        <div class="col-md-3 text-center">
            <img src="{{ asset('images/p4.jpg') }}" class="img-fluid" style="height:150px;">
            <p>Product 4</p>
        </div>

    </div>
</div>

<!-- 🔥 RECENTLY VIEWED -->
<div class="bg-white p-3 shadow-sm">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h4>🕒 Recently Viewed</h4>
        <a href="#" class="btn btn-primary btn-sm">View All</a>
    </div>

    <div class="row">

        <!-- Product 1 -->
        <div class="col-md-3 text-center">
            <img src="{{ asset('images/r1.jpg') }}" class="img-fluid" style="height:150px;">
            <p>Item 1</p>
        </div>

        <!-- Product 2 -->
        <div class="col-md-3 text-center">
            <img src="{{ asset('images/r2.jpg') }}" class="img-fluid" style="height:150px;">
            <p>Item 2</p>
        </div>

        <!-- Product 3 -->
        <div class="col-md-3 text-center">
            <img src="{{ asset('images/r3.jpg') }}" class="img-fluid" style="height:150px;">
            <p>Item 3</p>
        </div>

        <!-- Product 4 -->
        <div class="col-md-3 text-center">
            <img src="{{ asset('images/r4.jpg') }}" class="img-fluid" style="height:150px;">
            <p>Item 4</p>
        </div>

    </div>
</div>

@endsection