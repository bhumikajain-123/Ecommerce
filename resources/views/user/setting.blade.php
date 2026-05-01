@extends('user.layouts.main')

@push('title')
User Details
@endpush

@section('content')

<div id="layoutSidenav_content">
    <main>
        <div class="container">

            <div class="row">
                <div class="col-xl-9 col-md-9 p-4">

                    <!-- Account Setting -->
                    <div class="card mb-4">
                        <div class="card-body">
                            <h4 class="mb-4">Account Setting</h4>

                            <div class="row">
                                <!-- Form -->
                                <div class="col-md-8">
                                    <form>

                                        <div class="row mb-3">
                                            <div class="col-md-6">
                                                <label>First Name</label>
                                                <input type="text" class="form-control" placeholder="John">
                                            </div>

                                            <div class="col-md-6">
                                                <label>Last Name</label>
                                                <input type="text" class="form-control" placeholder="Doe">
                                            </div>
                                        </div>

                                        <div class="mb-3">
                                            <label>Email</label>
                                            <input type="email" class="form-control" placeholder="john@gmail.com">
                                        </div>

                                        <div class="mb-3">
                                            <label>Phone Number</label>
                                            <input type="text" class="form-control" placeholder="+91">
                                        </div>

                                        <button class="btn btn-primary">Save Changes</button>

                                    </form>
                                </div>

                                <!-- Profile Image -->
                                <div class="col-md-4 text-center">
                                    <img src="https://via.placeholder.com/150" class="rounded-circle mb-3" width="150"
                                        height="150">

                                    <br>
                                    <button class="btn btn-primary btn-sm">Choose Image</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Billing Address -->
                   <div class="card">
    <div class="card-body">
        <h4 class="mb-4">Billing Address</h4>

        <!-- Country -->
        <div class="mb-3">
            <label>Country</label>
            <select class="form-control">
                <option>Select your Country</option>
                <option selected>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
            </select>
        </div>

        <div class="row">
            <!-- First Name -->
            <div class="col-md-6 mb-3">
                <label>First Name</label>
                <input type="text" class="form-control" placeholder="John">
            </div>

            <!-- Last Name -->
            <div class="col-md-6 mb-3">
                <label>Last Name</label>
                <input type="text" class="form-control" placeholder="Doe">
            </div>

            <!-- Email -->
            <div class="col-md-6 mb-3">
                <label>Email</label>
                <input type="email" class="form-control" placeholder="john@gmail.com">
            </div>

            <!-- Phone -->
            <div class="col-md-6 mb-3">
                <label>Phone Number</label>
                <input type="text" class="form-control" placeholder="+91">
            </div>

            <!-- Pin Code -->
            <div class="col-md-6 mb-3">
                <label>Pin Code</label>
                <input type="text" class="form-control" placeholder="141001">
            </div>

            <!-- Landmark -->
            <div class="col-md-6 mb-3">
                <label>Landmark</label>
                <input type="text" class="form-control" placeholder="India Gate">
            </div>

            <!-- City -->
            <div class="col-md-6 mb-3">
                <label>City</label>
                <select class="form-control">
                    <option>Select your City</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Bangalore</option>
                    <option>Chennai</option>
                </select>
            </div>

            <!-- State -->
            <div class="col-md-6 mb-3">
                <label>State</label>
                <select class="form-control">
                    <option>Select your State</option>
                    <option>Uttar Pradesh</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                    <option>Rajasthan</option>
                    <option>Gujarat</option>
                    <option>Punjab</option>
                    <option>Haryana</option>
                    <option>West Bengal</option>
                    <option>Madhya Pradesh</option>
                </select>
            </div>
        </div>

        <button class="btn btn-primary mt-2">Save Changes</button>
    </div>
</div>

                </div>



    </main>



</div>





@endsection