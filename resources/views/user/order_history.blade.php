@extends('user.layouts.main')

@push('tiltle')
<title>Dashboard - User</title>
@endpush

@section('content')
<div id="layoutSidenav">

    <div id="layoutSidenav_content">
        <main>
            <div class="container-fluid px-4 py-4">

                <!-- Heading -->
                <h1 class="mb-4">Order History</h1>

                <!-- Orders Table -->
                <div class="card shadow-sm p-4">

                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h5 class="mb-0">All Orders</h5>
                        <input type="text" class="form-control w-25" placeholder="Search Order...">
                    </div>

                    <div class="table-responsive">
                        <table class="table align-middle">

                            <thead class="table-light">
                                <tr>
                                    <th>Order ID</th>
                                    <th>Date</th>
                                    <th>Total</th>
                                    <th>Payment</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td>#001</td>
                                    <td>25-12-2024</td>
                                    <td>₹1499.00</td>
                                    <td><span class="badge bg-success">Paid</span></td>
                                    <td><span class="badge bg-warning text-dark">Processing</span></td>
                                    <td><a href="#" class="btn btn-sm btn-dark">View</a></td>
                                </tr>

                                <tr>
                                    <td>#002</td>
                                    <td>24-12-2024</td>
                                    <td>₹2499.00</td>
                                    <td><span class="badge bg-success">Paid</span></td>
                                    <td><span class="badge bg-info text-dark">On the Way</span></td>
                                    <td><a href="{{url('user.detail') }} " class="btn btn-sm btn-dark">View</a></td>
                                </tr>

                                <tr>
                                    <td>#003</td>
                                    <td>22-12-2024</td>
                                    <td>₹999.00</td>
                                    <td><span class="badge bg-success">Paid</span></td>
                                    <td><span class="badge bg-success">Delivered</span></td>
                                    <td><a href="#" class="btn btn-sm btn-dark">View</a></td>
                                </tr>

                                <tr>
                                    <td>#004</td>
                                    <td>20-12-2024</td>
                                    <td>₹799.00</td>
                                    <td><span class="badge bg-danger">Failed</span></td>
                                    <td><span class="badge bg-secondary">Cancelled</span></td>
                                    <td><a href="#" class="btn btn-sm btn-dark">View</a></td>
                                </tr>

                            </tbody>

                        </table>
                    </div>

                </div>
        </main>

        @endsection