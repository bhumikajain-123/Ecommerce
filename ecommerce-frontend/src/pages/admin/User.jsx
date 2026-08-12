
import { useEffect, useState } from "react";
import UserService from "../../service/userService";
import { useNavigate } from "react-router-dom";
function Users() {
const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {

        const getUsers = async () => {

            try {

                const result = await UserService.getUsers();

                console.log(result);

                setUsers(result.users);
                

            } catch (err) {

                console.log(err);

            }

        };

        getUsers();

    }, []);

    

   


    // Delete user
    const handleDelete = async (id) => {

        try {

            const result = await UserService.deleteUser(id);

            console.log(result);

            // Remove deleted user from UI
            setUsers(
                users.filter((user) => user._id !== id)
            );

        } catch (err) {

            console.log(err);

        }

    };


    return (

        <div className="container-fluid p-4">

            <h2 className="fw-bold mb-4">
                Users
            </h2>


            <div className="card shadow-sm border-0">

                <div className="card-body">

                    <div className="table-responsive">

                        <table className="table table-hover align-middle">

                            <thead>

                                <tr>

                                    <th>Name</th>

                                    <th>Email</th>

                                    <th>Role</th>

                                    <th>Actions</th>

                                </tr>

                            </thead>


                            <tbody>

                                {users.map((user) => (

                                    <tr key={user._id}>

                                        <td>
                                            {user.name}
                                        </td>

                                        <td>
                                            {user.email}
                                        </td>

                                        <td>
                                            {user.role}
                                        </td>

                                        <td>

                                            {/* View */}
                                            <button
                                                className="btn btn-sm btn-info me-2"
                                                onClick={() =>
                                                navigate(`/admin/user/view/${user._id}`)
                                                }
                                            >
                                                View
                                            </button>


                                            {/* Edit */}
                                            <button
                                                className="btn btn-sm btn-warning me-2"
                                                onClick={() =>
                                                   navigate(`/admin/user/edit/${user._id}`)
                                                }
                                            >
                                                Edit
                                            </button>


                                            {/* Delete */}
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() =>
                                                    handleDelete(
                                                        user._id
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Users;
