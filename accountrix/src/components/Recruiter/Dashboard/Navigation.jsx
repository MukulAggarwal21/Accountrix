import React from 'react'
import {
    Search,

    BellRing,
    Menu,

} from 'lucide-react';
export default function Navigation({ setSidebarOpen }) {
    return (
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
            <div className="flex items-center">
                <button
                    className="mr-4 text-gray-600 lg:hidden"
                    onClick={() => setSidebarOpen(true)}
                >
                    <Menu size={24} />
                </button>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search candidates, jobs..."
                        className="rounded-lg border border-gray-300 pl-10 pr-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <button className="relative text-gray-600 hover:text-gray-900">
                    <BellRing size={22} />
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                        3
                    </span>
                </button>
                <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-200">
                    <img
                        src="/api/placeholder/40/40"
                        alt="Profile"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </header>
    )
}
