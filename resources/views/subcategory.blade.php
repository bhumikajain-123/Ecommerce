@extends('layouts.main')

@section('title', 'Subcategory')

@section('content')

<!-- HEADER -->
<div class="container-fluid bg-light p-4 shadow-sm mb-4">
    <h2 class="text-center fw-bold text-capitalize">
        <i class="fa-solid fa-list text-success"></i> {{ $subcategory }}
    </h2>

    <p class="text-center text-muted">
        Home > {{ $category }} > {{ $subcategory }}
    </p>
</div>

<!-- PRODUCTS -->
<div class="container">
  <div class="row">

    <div class="col-md-3 mb-4">
      <div class="card shadow-sm h-100">
        <img src="{{ asset('images/p1.jpg') }}" class="card-img-top" style="height:180px;">
        <div class="card-body text-center">
          <h6>iPhone 14</h6>
          <p class="text-success">₹70,000</p>
          <a href="{{ url('category/'.$category.'/'.$subcategory.'/iphone-14/1') }}" class="btn btn-sm btn-primary">View</a>
        </div>
      </div>
    </div>

    <div class="col-md-3 mb-4">
      <div class="card shadow-sm h-100">
        <img src="{{ asset('images/p2.jpg') }}" class="card-img-top" style="height:180px;">
        <div class="card-body text-center">
          <h6>Samsung</h6>
          <p class="text-success">₹50,000</p>
          <a href="{{ url('category/'.$category.'/'.$subcategory.'/samsung/2') }}" class="btn btn-sm btn-primary">View</a>
        </div>
      </div>
    </div>

  </div>
</div>

@endsection