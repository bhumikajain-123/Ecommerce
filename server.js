const express = require("express");
const app = express();
app.use(express.json());
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");

app.use("/category", categoryRoutes);
app.use("/product",productRoutes);

app.listen(5000, () => {
    console.log("Server is running at 5000");
});