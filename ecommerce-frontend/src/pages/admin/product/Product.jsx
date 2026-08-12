import AdminTable from "../../../components/admin/DataTable";
import productService from "../../../service/productService";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Product() {

    const navigate = useNavigate();

    const [data, setProductData] = useState([]);


    // Get products
    useEffect(() => {

        const handleProduct = async () => {

            try {

                const result =
                    await productService.getProductsAdmin();

                console.log("Product response:", result);

                setProductData(result);

            } catch (err) {

                console.log(err);

            }

        };

        handleProduct();

    }, []);


    // Edit product
    const handleEdit = (id) => {

        navigate(`/admin/product/edit/${id}`);

    };


    // Delete product
    const handleDelete = async (id) => {

        const confirmDelete =
            window.confirm(
                "Are you sure you want to delete this product?"
            );

        if (!confirmDelete) {
            return;
        }

        try {

            const result =
                await productService.deleteProduct(id);

            console.log(result);

            // Remove product from table
            setProductData(
                data.filter(
                    (product) => product._id !== id
                )
            );

            alert("Product deleted successfully");

        } catch (err) {

            console.log(err);

        }

    };


    // Table columns
    const columns = [

        {
            label: "Name",
            key: "name"
        },

        {
            label: "Description",
            key: "description"
        },

         {
        label: "Category",
        key: "category"
    },
        {
            label: "Price",
            key: "price"
        },

        {
            label: "Stock",
            key: "stock"
        }

    ];


    // Table actions
    const actions = (item) => {

        return (

            <>

                <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() =>
                        handleEdit(item._id)
                    }
                >
                    Edit
                </button>


                <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                        handleDelete(item._id)
                    }
                >
                    Delete
                </button>

            </>

        );

    };


    return (

        <div className="container-fluid p-4">

            {/* Header */}

            <div className="d-flex justify-content-between align-items-center mb-4">

                <div>

                    <h2 className="fw-bold mb-1">
                        Products
                    </h2>

                    <p className="text-muted mb-0">
                        Manage your products
                    </p>

                </div>


                {/* Add Product */}

                <button
                    className="btn btn-primary"
                    onClick={() =>
                        navigate("/admin/product/add")
                    }
                >
                    + Add Product
                </button>

            </div>


            {/* Product Table */}

            <div className="card border-0 shadow-sm">

                <div className="card-body">

                    <AdminTable
                        data={data}
                        columns={columns}
                        renderActions={actions}
                    />

                </div>

            </div>

        </div>

    );

}

export default Product;