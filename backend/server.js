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
app.listen(5000, () => {
    console.log("Server is running at 5000");
});