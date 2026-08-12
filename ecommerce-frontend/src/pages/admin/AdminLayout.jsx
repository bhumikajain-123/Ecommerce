
import Sidebar from "./Sidebar";

function AdminLayout({ children }) {

    return (
        <div className="d-flex">

            <Sidebar />

            <div className="flex-grow-1">
                {children}
            </div>

        </div>
    );
}

export default AdminLayout;