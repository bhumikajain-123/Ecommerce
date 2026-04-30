@extends('layouts.main')

@section('title', 'Register')

@section('content')

<!-- 🔥 HEADER -->
<div class="container-fluid bg-light p-4 text-center mb-4">
    <h2 class="fw-bold">
        <i class="fa-solid fa-user text-secondary"></i> User Register
    </h2>
</div>

<div class="container">
    <div class="row align-items-center">

        <!-- 🖼️ LEFT IMAGE -->
        <div class="col-md-6 mb-4">
            <img src="{{ asset('images/register.jpg') }}" class="img-fluid rounded shadow-sm">
        </div>

        <!-- 📱 RIGHT FORM -->
        <div class="col-md-6">

            <div class="p-4">

                <label class="mb-2 text-muted">Please enter your mobile number</label>

                <!-- Phone Input -->
                <div class="input-group mb-3">
                    <span class="input-group-text">+91</span>
                    <input type="text" class="form-control" placeholder="Enter mobile number">
                </div>

                <!-- Continue Button -->
                <a href="{{ url('register1') }}" class="btn btn-warning w-100 fw-bold">
                    Continue
                </a>

                <!-- Login Link -->
                <p class="text-center mt-4">
                    Have an account?
                    <a href="{{ url('login') }}" class="text-primary">Login</a>
                </p>

            </div>

        </div>

    </div>
</div>

@endsection