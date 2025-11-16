import React from "react";
import Header from "../layout/Header";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-8 bg-[#1C1C1C] text-white">
      <Header />
      <div>
        <form>
          <div className="flex gap-5 items-center">
            <h3 className="text-xl mt-5 mb-2">Task Title</h3>
            <input type="text" placeholder="make a ui design..." />
          </div>
          <div className="flex gap-5 items-center">
            <h3 className="text-xl mt-5 mb-2">Description</h3>
            <textarea name="" id=""></textarea>
          </div>
          <div className="flex gap-5 items-center">
            <h3 className="text-xl mt-5 mb-2">Date</h3>
            <input type="date" />
          </div>
          <div className="flex gap-5 items-center">
            <h3 className="text-xl mt-5 mb-2">Assign To</h3>
            <input type="text" placeholder="Employee Name" />
          </div>
          <div className="flex gap-5 items-center">
            <h3 className="text-xl mt-5 mb-2">Category</h3>
            <input type="text" placeholder="Design, dev, etc." />
          </div>
          <button className="bg-blue-400 border-none px-4 py-1 rounded-lg font-medium">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
