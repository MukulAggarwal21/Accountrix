import React from 'react'

export default function Pagination( { filteredApplications, applications }) {
  return (
   <div className="mt-4 py-3 px-4 bg-white rounded-lg shadow flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">{filteredApplications.length}</span> of <span className="font-medium">{applications.length}</span> candidates
          </div>
          <div className="flex space-x-2">
            <button className="bg-white border border-gray-300 text-gray-500 px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-50">
              Previous
            </button>
            <button className="bg-indigo-50 border border-indigo-500 text-indigo-600 px-4 py-2 text-sm font-medium rounded-md">
              1
            </button>
            <button className="bg-white border border-gray-300 text-gray-500 px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-50">
              2
            </button>
            <button className="bg-white border border-gray-300 text-gray-500 px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>  )
}
