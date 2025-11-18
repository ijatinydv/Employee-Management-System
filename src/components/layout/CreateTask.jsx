import React from "react";

const CreateTask = () => {
  return (
    <div className="p-5 mt-7 rounded bg-[#1C1C1C]">
      <form className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg- border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="make a ui design..."
            />
          </div>

          <div className="">
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              type="date"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg- border-[1px] border-gray-400 mb-4"
            />
          </div>
          <div className="">
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
              type="text"
              placeholder="Employee Name"
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg- border-[1px] border-gray-400 mb-4"
            />
          </div>
          <div className="">
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              type="text"
              placeholder="Design, dev, etc."
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg- border-[1px] border-gray-400 mb-4"
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            name=""
            id=""
            className="w-full h-34 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-lg font-medium mt-4 w-full cursor-pointer">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
