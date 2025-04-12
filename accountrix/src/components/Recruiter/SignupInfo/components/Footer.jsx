import React from 'react'

export default function Footer() {
    return (
        <div className="text-center text-gray-500 text-sm max-w-3xl mx-auto">
            <p className="mb-2">© 2025 JobConnect. All rights reserved.</p>
            <div className="flex justify-center space-x-4">
                <a href="#" className="hover:text-gray-700 transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="hover:text-gray-700 transition-colors duration-200">Terms of Service</a>
                <a href="#" className="hover:text-gray-700 transition-colors duration-200">Help Center</a>
            </div>
        </div>)
}
