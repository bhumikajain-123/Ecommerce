
import { useEffect, useState } from "react";
import DashboardService from "../../service/DashboardService";

function Dashboard() {

    const [data, setData] = useState({
        user: 0,
        product: 0,
        order: 0,
        sales: 0
    });

    useEffect(() => {

        const getData = async () => {
            try {
                const result = await DashboardService.dashboard();

                console.log(result);

                setData({
                    user: result.user,
                    product: result.product,
                    order: result.order,
                    sales: result.sales[0]?.totalSales || 0
                });

            } catch (err) {
                console.log(err);
            }
        };

        getData();

    }, []);

    return (
        <div className="container-fluid bg-light min-vh-100 p-4">

            {/* Heading */}
            <div className="mb-4">
                <h2 className="fw-bold">Admin Dashboard</h2>
                <p className="text-muted">
                    Welcome back! Here's what's happening in your store.
                </p>
            </div>

            {/* Dashboard Cards */}
            <div className="row g-4">

                {/* Users */}
                <div className="col-md-6 col-lg-3">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body p-4">

                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div>
                                    <p className="text-muted mb-1">
                                        Total Users
                                    </p>

                                    <h2 className="fw-bold mb-0">
                                        {data.user}
                                    </h2>
                                </div>

                                <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                                    <span className="fs-3">👤</span>
                                </div>
                            </div>

                            <small className="text-success">
                                Active customers
                            </small>

                        </div>
                    </div>
                </div>


                {/* Products */}
                <div className="col-md-6 col-lg-3">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body p-4">

                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div>
                                    <p className="text-muted mb-1">
                                        Total Products
                                    </p>

                                    <h2 className="fw-bold mb-0">
                                        {data.product}
                                    </h2>
                                </div>

                                <div className="bg-success bg-opacity-10 rounded-circle p-3">
                                    <span className="fs-3">📦</span>
                                </div>
                            </div>

                            <small className="text-success">
                                Products available
                            </small>

                        </div>
                    </div>
                </div>


                {/* Orders */}
                <div className="col-md-6 col-lg-3">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body p-4">

                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div>
                                    <p className="text-muted mb-1">
                                        Total Orders
                                    </p>

                                    <h2 className="fw-bold mb-0">
                                        {data.order}
                                    </h2>
                                </div>

                                <div className="bg-warning bg-opacity-10 rounded-circle p-3">
                                    <span className="fs-3">🛒</span>
                                </div>
                            </div>

                            <small className="text-warning">
                                Orders received
                            </small>

                        </div>
                    </div>
                </div>


                {/* Sales */}
                <div className="col-md-6 col-lg-3">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body p-4">

                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div>
                                    <p className="text-muted mb-1">
                                        Total Sales
                                    </p>

                                    <h2 className="fw-bold mb-0">
                                        ₹{data.sales}
                                    </h2>
                                </div>

                                <div className="bg-danger bg-opacity-10 rounded-circle p-3">
                                    <span className="fs-3">💰</span>
                                </div>
                            </div>

                            <small className="text-success">
                                Total revenue
                            </small>

                        </div>
                    </div>
                </div>

            </div>


            {/* Welcome Section */}
            <div className="card border-0 shadow-sm mt-4">
                <div className="card-body p-4">

                    <h4 className="fw-bold">
                        Store Overview
                    </h4>

                    <p className="text-muted mb-0">
                        Manage your users, products, categories and orders
                        from the admin panel.
                    </p>

                </div>
            </div>

        </div>
    );
}

export default Dashboard;
