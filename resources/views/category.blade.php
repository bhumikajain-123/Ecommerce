@extends('layouts.main')

@section('title', 'Category')

@section('content')

<!-- HEADER -->
<div class="container-fluid bg-light p-4 shadow-sm mb-4">
    <h2 class="text-center fw-bold text-capitalize">
        <i class="fa-solid fa-layer-group text-primary"></i> {{ $category }}
    </h2>
</div>

<!-- SUBCATEGORY LIST -->
<div class="container">
  <div class="row text-center">

    <div class="col-md-3 mb-4">
      <div class="card shadow-sm">
        <img src="{{ asset('images/s1.jpg') }}" class="card-img-top" style="height:150px;">
        <div class="card-body">
          <h6>Mobiles</h6>
          <a href="{{ url('category/'.$category.'/mobiles') }}" class="btn btn-primary btn-sm">Explore</a>
        </div>
      </div>
    </div>

    <div class="col-md-3 mb-4">
      <div class="card shadow-sm">
        <img src="{{ asset('images/s2.jpg') }}" class="card-img-top" style="height:150px;">
        <div class="card-body">
          <h6>Laptops</h6>
          <a href="{{ url('category/'.$category.'/laptops') }}" class="btn btn-primary btn-sm">Explore</a>
        </div>
      </div>
    </div>

  </div>
</div>

@endsection