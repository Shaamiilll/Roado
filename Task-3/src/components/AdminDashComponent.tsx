
import Header from "./Header";
import Statistics from "./Statistics";
import QuickAction from "./QuickAction";
import PriorityAlert from "./PriorityAlert";

// Component for the admin dashboard
function AdminDashComponent() {
  return (
    <div>
      <Header />
      {/* Container for Statistics component or charjs */}
      <div style={{ marginTop: "20px" }}>
        <Statistics />
      </div>
      {/* Container for QuickAction component */}
      <div style={{ marginTop: "20px" }}>
        <QuickAction />
      </div>
      {/* Container for PriorityAlert component */}
      <div style={{ marginTop: "20px" }}>
        <PriorityAlert />
      </div>
    </div>
  );
}

export default AdminDashComponent;
