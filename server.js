const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const cartItemRoutes = require("./routes/cartItemRoutes");
const addressRoutes = require("./routes/addressRoutes");
const orderRoutes = require("./routes/orderRoutes");
const orderItemRoutes = require("./routes/orderItemRoutes");


app.use("/category", categoryRoutes);
app.use("/product",productRoutes);
app.use("/user",userRoutes);
app.use("/cart",cartRoutes);
app.use("/cartItem",cartItemRoutes);
app.use("/address",addressRoutes);
app.use("/order",orderRoutes);
app.use("/orderItem",orderItemRoutes);




//  ----------------admin--------------------------------

const adminLoginRoutes = require("./routes/admin/adminLoginRoutes");
const dashboardRoutes = require("./routes/admin/DashboardRoutes");
const admincategoryRoutes = require("./routes/admin/categoryRoutes");
const adminproductRoutes = require("./routes/admin/productRoutes");

app.use("/admin",adminLoginRoutes);
app.use("/admin/dashboard", dashboardRoutes);
app.use("/admin/category",admincategoryRoutes);
app.use("/admin/product",adminproductRoutes);
app.listen(5000, () => {
    console.log("Server is running at 5000");
});




