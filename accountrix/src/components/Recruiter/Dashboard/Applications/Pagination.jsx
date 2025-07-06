import React from 'react'

export default function Pagination({ currentPage = 1, totalPages = 1, onPageChange }) {
  return (
    <div className="mt-4 py-3 px-4 bg-white rounded-lg shadow flex items-center justify-between">
      <div className="text-sm text-gray-700">
        Page <span className="font-medium">{currentPage}</span> of <span className="font-medium">{totalPages}</span>
      </div>
      <div className="flex space-x-2">
        <button
          className="bg-white border border-gray-300 text-gray-500 px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-50"
          onClick={() => onPageChange && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="bg-white border border-gray-300 text-gray-500 px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-50"
          onClick={() => onPageChange && onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}
