function AdminTable({ data, columns, renderActions }) {

    return (

        <table className="table">

            <thead>

                <tr>

                    <th>#</th>

                    {columns.map((column) => {

                        return (
                            <th key={column.key}>
                                {column.label}
                            </th>
                        );

                    })}

                    <th>Actions</th>

                </tr>

            </thead>


            <tbody>

                {data.map((item, index) => {

                    return (

                        <tr key={item._id || item.id}>

                            <td>{index + 1}</td>

                            {columns.map((column) => {

                                return (
                                    <td key={column.key}>

                                        {column.key === "category"
                                            ? item.category?.name || "No Category"
                                            : item[column.key]
                                        }

                                    </td>
                                );

                            })}

                            <td>
                                {renderActions(item)}
                            </td>

                        </tr>

                    );

                })}

            </tbody>

        </table>

    );
}

export default AdminTable;