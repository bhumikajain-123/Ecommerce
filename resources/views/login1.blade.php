@extends('layouts.main')

@section('title', 'Login OTP')

@section('content')

<div class="container mt-5">
  <div class="row justify-content-center">

    <div class="col-md-5">
      <div class="card shadow-sm p-4 text-center">

        <!-- 🔥 Heading -->
        <h4 class="mb-3">
          <i class="fa-solid fa-key text-success"></i> Login Verification
        </h4>

        <!-- 📱 Show Mobile -->
        <p class="text-muted">
          OTP sent to <strong>+91 {{ request()->mobile }}</strong>
        </p>

        <!-- 🔢 OTP Input -->
        <form>
          <input type="text" class="form-control mb-3 text-center"
                 placeholder="Enter OTP" maxlength="6" required>

          <!-- ⏱ Timer -->
          <p class="text-muted small">Resend OTP in 30 sec</p>

          <!-- ✅ Login Button -->
          <button type="submit" class="btn btn-success w-100">
            Login
          </button>
        </form>

        <!-- 🔁 Change Number -->
        <a href="{{ url('login') }}" class="d-block mt-3 text-decoration-none">
          Change Mobile Number
        </a>

        <!-- 🔥 Register Option -->
        <p class="mt-2">
          New user?
          <a href="{{ url('register') }}" class="text-primary text-decoration-none">
            Create Account
          </a>
        </p>

      </div>
    </div>

  </div>
</div>

@endsection