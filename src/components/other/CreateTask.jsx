import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
          <form className="flex w-full justify-between">
            <div className="w-[50%]">
              <div>
                <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
                <input
                  className="text-sm py-1 px-2 w-full mb-4 rounded outline-none bg-transparent border border-gray-400"
                  type="text"
                  placeholder="Make a UI design"
                  aria-label="Task Title"
                />
              </div>
              <div>
                <h3 className="text-sm text-gray-300 mb-1">Date</h3>
                <input
                  className="text-sm py-1 px-2 w-full mb-4 rounded outline-none bg-transparent border border-gray-400"
                  type="date"
                  aria-label="Task Date"
                />
              </div>
              <div>
                <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
                <input
                  className="text-sm py-1 px-2 w-full mb-4 rounded outline-none bg-transparent border border-gray-400"
                  type="text"
                  placeholder="Employee Name"
                  aria-label="Assign To"
                />
              </div>
              <div>
                <h3 className="text-sm text-gray-300 mb-1">Category</h3>
                <input
                  className="text-sm py-1 px-2 w-full mb-4 rounded outline-none bg-transparent border border-gray-400"
                  type="text"
                  placeholder="Design, Dev, etc."
                  aria-label="Category"
                />
              </div>
            </div>
            <div className="w-[45%]">
              <div>
                <h3 className="text-sm text-gray-300 mb-1">Description</h3>
                <textarea
                  className="text-sm py-1 px-2 w-full mb-4 rounded outline-none bg-transparent border border-gray-400"
                  cols="30"
                  rows="10"
                  placeholder="Add a detailed description of the task"
                  aria-label="Task Description"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-sm bg-emerald-500 hover:bg-emerald-600 text-white py-1 px-4 rounded transition duration-200"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
  )
}

export default CreateTask