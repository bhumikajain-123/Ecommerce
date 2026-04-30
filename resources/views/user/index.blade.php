@extends('user.layouts.main')

@push('tiltle')
<title>Dashboard - User</title>
@endpush

@section('content')
<div id="layoutSidenav">

    <div id="layoutSidenav_content">
        <main>
            <div class="container-fluid px-4">
                <h1 class="mt-4">Dashboard</h1>

                <div class="row">
                    <div class="col-xl-6 col-md-6">
                        <div class="card p-4 text-center shadow-sm" style="background:#17a2b8; color:white;">
                            <img src="{{ asset('images/user.png') }}" class="rounded-circle mx-auto mb-3" width="100">

                            <h5>John Doe</h5>
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6">
                        <div class="card p-4 shadow-sm" style="background:#17a2b8; color:white;">
                            <h5>Billing Address</h5>
                            <p class="mb-1">Reference site about Lorem Ipsum</p>
                            <p class="mb-1"><strong>Email:</strong> john@gmail.com</p>
                            <p><strong>Phone:</strong> +91 1236547890</p>
                        </div>
                    </div>


                </div>

                <div class="card p-3 shadow-sm mt-4">
                    <div class="d-flex justify-content-between mb-3 mt-3">
                        <h5>Recent Orders</h5>
                        <a href="#" class="btn btn-dark btn-sm">View All</a>
                    </div>

                    <table class="table">
                        <thead>
                            <tr>
                                <th>Order Id</th>
                                <th>Date</th>
                                <th>Total</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>001</td>
                                <td>25-12-2024</td>
                                <td>₹1499.00</td>
                                <td>
                                    <span class="badge bg-warning text-dark">Processing</span>
                                    <a href="#" class="ms-2">View Details</a>
                                </td>
                            </tr>

                            <tr>
                                <td>002</td>
                                <td>25-12-2024</td>
                                <td>₹1499.00</td>
                                <td>
                                    <span class="badge bg-info text-dark">On the Way</span>
                                    <a href="#" class="ms-2">View Details</a>
                                </td>
                            </tr>

                            <tr>
                                <td>003</td>
                                <td>25-12-2024</td>
                                <td>₹1499.00</td>
                                <td>
                                    <span class="badge bg-success">Delivered</span>
                                    <a href="#" class="ms-2">View Details</a>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>


            </div>
        </main>

        @endsection