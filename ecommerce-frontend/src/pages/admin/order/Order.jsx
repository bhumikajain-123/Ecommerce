import orderService from "../../../service/orderService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Order.css";

function OrderAdmin() {
const navigate = useNavigate();
    const [orderData, setOrderData] = useState([]);

    useEffect(() => {

        const getOrders = async () => {
            try {
                const data = await orderService.getOrdersAdmin();

                console.log(data);
                setOrderData(data);
            } catch (error) {
                console.log(error);
            }
        };

        getOrders();

    }, []);

    const handleView = (id) =>{
        navigate(`/admin/order/view/${id}`)
    }

    return (
        <div className="order-admin">

            <div className="order-header">
                <div>
                    <h1>Orders</h1>
                    <p>Manage and track customer orders</p>
                </div>

                <div className="order-count">
                    Total Orders: {orderData.length}
                </div>
            </div>

            <div className="order-table-container">

                <table className="order-table">

                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {orderData.map((item) => (

                            <tr key={item._id}>

                                <td>
                                    #{item._id.slice(-6)}
                                </td>

                                <td>
                                    <strong>
                                        {item.userId?.name}
                                    </strong>
                                </td>

                                <td>
                                    {item.userId?.email}
                                </td>

                                <td>
                                    {item.userId?.phone}
                                </td>

                                <td>
                                    ₹{item.totalAmount}
                                </td>

                                <td>
                                    <span className={`status ${item.status?.toLowerCase()}`}>
                                        {item.status}
                                    </span>
                                </td>

                                <td>
                                    {new Date(item.createdAt).toLocaleDateString()}
                                </td>

                                <td>
                                 <button
                                    className="view-btn"
                                    onClick={() => handleView(item._id)}
                                >
                                    View
                                </button>
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

                {orderData.length === 0 && (
                    <div className="no-orders">
                        <h3>No Orders Found</h3>
                        <p>There are currently no customer orders.</p>
                    </div>
                )}

            </div>

        </div>
    );
}

export default OrderAdmin;