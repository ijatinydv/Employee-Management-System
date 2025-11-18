import React from "react";
import Header from "../layout/Header";
import CreateTask from "../layout/CreateTask";
import AllTask from "../layout/AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-8 bg-black text-white">
      <Header />
      <CreateTask />
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
