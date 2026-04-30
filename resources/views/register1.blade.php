@extends('layouts.main')

@section('title', 'Verify OTP')

@section('content')

<div class="container mt-5">
    <div class="row justify-content-center">

        <div class="col-md-5">
            <div class="card shadow-sm p-4 text-center">

                <h4 class="mb-3">
                    <i class="fa-solid fa-mobile-screen-button text-success"></i>
                    Verify OTP
                </h4>

                <!-- Show Mobile -->
                <p class="text-muted">
                    OTP sent to <strong>+91 {{ request()->mobile }}</strong>
                </p>

                <!-- OTP Input -->
                <input type="text" class="form-control mb-3 text-center" placeholder="Enter OTP" maxlength="6">

                <!-- Timer -->
                <p class="text-muted small">Resend OTP in 30 sec</p>

                <!-- Verify Button -->
                <button class="btn btn-success w-100">
                    Verify & Continue
                </button>

                <!-- Back -->
                <a href="{{ url('register') }}" class="d-block mt-3 text-decoration-none">
                    Change Mobile Number
                </a>

                <!-- 🔥 Login Option -->
                <p class="mt-3">
                    Already have an account?
                    <a href="{{ url('login') }}" class="text-primary fw-semibold text-decoration-none">
                        Login
                    </a>
                </p>

            </div>
        </div>

    </div>
</div>

@endsection