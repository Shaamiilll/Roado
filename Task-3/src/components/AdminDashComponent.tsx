import React from "react";
import Header from "./Header";
import Statistics from "./Statistics";

function AdminDashComponent() {
  return (
    <div>
      <Header />
      <div style={{ marginTop: "20px" }}>
        <Statistics />
      </div>
    </div>
  );
}

export default AdminDashComponent;
