import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import orderService from "../../../service/orderService";
import "./View.css";

function View() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [order, setOrder] = useState({});
    const [status, setStatus] = useState("");
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getOrder = async () => {

            try {

                const data = await orderService.getOrderByIdAdmin(id);
                const response = await orderService.getProduct(id);

                console.log("Order:", data);
                console.log("Products:", response);

                setOrder(data);
                setStatus(data.status);
                setProduct(response);

            } catch (err) {

                console.log(err);

            } finally {

                setLoading(false);

            }
        };

        getOrder();

    }, [id]);


    const handleUpdateStatus = async (e) => {

        try {

            const newStatus = e.target.value;

            setStatus(newStatus);

            const data = await orderService.updateOrder(
                id,
                newStatus
            );

            console.log(data);

            alert(data.message);

        } catch (err) {

            console.log(err.message);

        }
    };


    if (loading) {
        return (
            <div className="loading">
                Loading order details...
            </div>
        );
    }


    return (

        <div className="order-container">

            {/* Header */}

            <div className="page-header">

                <div>

                    <button
                        className="back-button"
                        onClick={() => navigate("/admin/order")}
                    >
                        ← Back to Orders
                    </button>

                    <h1>Order Details</h1>

                    <p>
                        Order ID: #{order._id}
                    </p>

                </div>

                <div className="status-section">

                    <label>
                        Order Status
                    </label>

                    <select
                        value={status}
                        onChange={handleUpdateStatus}
                        className={`status-select ${status.toLowerCase()}`}
                    >

                        <option value="Pending">
                            Pending
                        </option>

                        <option value="Confirmed">
                            Confirmed
                        </option>

                        <option value="Shipped">
                            Shipped
                        </option>

                        <option value="Delivered">
                            Delivered
                        </option>

                        <option value="Cancelled">
                            Cancelled
                        </option>

                    </select>

                </div>

            </div>


            {/* Order Summary */}

            <div className="summary-grid">

                <div className="summary-card">

                    <span>Order ID</span>

                    <strong>
                        #{order._id?.slice(-8)}
                    </strong>

                </div>


                <div className="summary-card">

                    <span>Status</span>

                    <strong className={`status-text ${status.toLowerCase()}`}>
                        {status}
                    </strong>

                </div>


                <div className="summary-card">

                    <span>Total Amount</span>

                    <strong>
                        ₹{order.totalAmount || 0}
                    </strong>

                </div>


                <div className="summary-card">

                    <span>Order Date</span>

                    <strong>
                        {order.createdAt
                            ? new Date(
                                order.createdAt
                            ).toLocaleDateString()
                            : "N/A"
                        }
                    </strong>

                </div>

            </div>


            {/* Customer */}

            <div className="content-card">

                <h2>Customer Information</h2>

                <div className="customer-grid">

                    <div>
                        <span>Name</span>
                        <strong>
                            {order.userId?.name || "N/A"}
                        </strong>
                    </div>

                    <div>
                        <span>Email</span>
                        <strong>
                            {order.userId?.email || "N/A"}
                        </strong>
                    </div>

                    <div>
                        <span>Phone</span>
                        <strong>
                            {order.userId?.phone || "N/A"}
                        </strong>
                    </div>

                </div>

            </div>


            {/* Address */}

            <div className="content-card">

                <h2>Delivery Address</h2>

                <div className="address-box">

                    <strong>
                        {order.addressId?.fullName || "N/A"}
                    </strong>

                    <p>
                        {order.addressId?.addressLine || ""}
                    </p>

                    <p>
                        {order.addressId?.city || ""}
                        {order.addressId?.state
                            ? `, ${order.addressId.state}`
                            : ""
                        }
                    </p>

                    <p>
                        Pincode: {order.addressId?.pincode || "N/A"}
                    </p>

                    <p>
                        Phone: {order.addressId?.phone || "N/A"}
                    </p>

                </div>

            </div>


            {/* Products */}

            <div className="content-card">

                <div className="products-header">

                    <h2>Ordered Products</h2>

                    <span>
                        {product.length} Product(s)
                    </span>

                </div>


                <div className="product-list">

                    {product.length > 0 ? (

                        product.map((item) => (

                            <div
                                className="product-item"
                                key={item._id}
                            >

                                <div className="product-image">

                                    {item.productId?.image ? (

                                        <img
                                            src={item.productId.image}
                                            alt={item.productId.name}
                                        />

                                    ) : (

                                        <div className="no-image">
                                            No Image
                                        </div>

                                    )}

                                </div>


                                <div className="product-details">

                                    <h3>
                                        {item.productId?.name}
                                    </h3>

                                    <p>
                                        Price: ₹{item.price}
                                    </p>

                                    <p>
                                        Quantity: {item.quantity}
                                    </p>

                                </div>


                                <div className="product-total">

                                    ₹{item.price * item.quantity}

                                </div>

                            </div>

                        ))

                    ) : (

                        <p className="no-products">
                            No products found
                        </p>

                    )}

                </div>


                {/* Total */}

                <div className="total-section">

                    <span>
                        Total Amount
                    </span>

                    <strong>
                        ₹{order.totalAmount || 0}
                    </strong>

                </div>

            </div>

        </div>
    );
}

export default View;