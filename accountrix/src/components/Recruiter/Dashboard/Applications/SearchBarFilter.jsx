import React from 'react'
import { Search, Filter } from 'lucide-react';

export default function SearchBarFilter( {searchQuery , setSearchQuery  , filters , activeFilter , setActiveFilter} ) {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4  top-16 z-10">
          <div className="flex flex-col lg:flex-row justify-between gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search candidates by name, position, or company..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
              {filters.map(filter => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-md whitespace-nowrap ${
                    activeFilter === filter 
                      ? 'bg-indigo-100 text-indigo-700 font-medium border border-indigo-200' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
              <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center gap-1">
                <Filter size={16} />
                <span>More Filters</span>
              </button>
            </div>
          </div>
        </div>

  )
}
