import Activity from "../components/Activity";
import AdminDashComponent from "../components/AdminDashComponent";
import Sidebar from "../components/SidebarComponent";

function AdminDashboardPage() {
  return (
    // Main container for the admin dashboard page
    <div className="min-h-screen flex flex-row p-0">
      {/* Sidebar component */}
      <div>
        <Sidebar />
      </div>
      {/* Main content area */}
      <div className="bg-sky-50 w-9/12 p-7">
        {/* Admin dashboard component */}
        <AdminDashComponent />
      </div>
      {/* Activity component */}
      <Activity />
    </div>
  );
}

export default AdminDashboardPage;
