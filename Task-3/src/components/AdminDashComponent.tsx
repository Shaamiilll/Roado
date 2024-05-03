import React from "react";
import Header from "./Header";
import Statistics from "./Statistics";
import QuickAction from "./QuickAction";
import PriorityAlert from "./PriorityAlert";

function AdminDashComponent() {
  return (
    <div>
      <Header />
      <div style={{ marginTop: "20px" }}>
        <Statistics />
      </div>
      <div style={{ marginTop: "0px" }}>
        <QuickAction />
      </div>
      <div style={{ marginTop: "0px" }}>
        <PriorityAlert />
      </div>
    </div>
  );
}

export default AdminDashComponent;
