import AdminTable from "../../../components/admin/DataTable";
import categoryService from "../../../service/categoryService";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Category() {

    const navigate = useNavigate();

    const [data, setCategoryData] = useState([]);


    // Get categories
    useEffect(()=>{
 const handleCategory = async () => {

        try {

            const result = await categoryService.getCategory();

            console.log("Category response:", result);

            setCategoryData(result);

        } catch (err) {

            console.log(err);

        }

    };

handleCategory();
    },[])
   


 


    // Edit category
    const handleEdit = (id) => {

        navigate(`/admin/category/edit/${id}`);

    };


    // Delete category
    const handleDelete = async (id) => {

        const confirmDelete =
            window.confirm("Are you sure you want to delete this category?");

        if (!confirmDelete) {
            return;
        }

        try {

            const result =
                await categoryService.deleteCategory(id);

            console.log(result);

            // Remove deleted category from table
            setCategoryData(
                data.filter((category) =>
                    category._id !== id
                )
            );

            alert("Category deleted successfully");

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
                        Categories
                    </h2>

                    <p className="text-muted mb-0">
                        Manage your product categories
                    </p>

                </div>


                {/* Add Category */}

                <button
                    className="btn btn-primary"
                    onClick={() =>
                        navigate("/admin/category/add")
                    }
                >
                    + Add Category
                </button>

            </div>


            {/* Table */}

            <AdminTable
                data={data}
                columns={columns}
                renderActions={actions}
            />

        </div>

    );

}

export default Category;