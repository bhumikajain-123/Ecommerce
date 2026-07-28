const express = require("express");
const app = express();
app.use(express.json());
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
app.use("/category", categoryRoutes);
app.use("/product",productRoutes);
app.use("/user",userRoutes);

app.listen(5000, () => {
    console.log("Server is running at 5000");
});