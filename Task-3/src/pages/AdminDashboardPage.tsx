import AdminDashComponent from '../components/AdminDashComponent';
import Highlight from '../components/Highlight';
import Sidebar from '../components/SidebarComponent';

function AdminDashboardPage() {
  return (
    <div className="min-h-screen flex flex-row p-0">
      <div>
        <Sidebar />
      </div>
      <div className="bg-sky-50 w-full">
        <AdminDashComponent/>
      </div>
    </div>
  );
}

export default AdminDashboardPage;